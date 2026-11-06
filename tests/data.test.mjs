// Data-integrity tests using Node's built-in test runner (no extra dependencies).
// Requires Node >= 22.18 (native TypeScript type stripping for data/index.ts).
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import * as data from "../data/index.ts";

const root = new URL("..", import.meta.url).pathname;
const publicFile = (p) => existsSync(join(root, "public", p));

const collectAssets = () => {
  const paths = [];
  for (const g of data.gridItems) paths.push(g.img, g.spareImg);
  for (const p of data.projects) paths.push(p.img, ...p.iconLists);
  for (const t of data.testimonials) paths.push(t.img);
  for (const c of data.companies) paths.push(c.img, c.nameImg);
  for (const w of data.workExperience) paths.push(w.thumbnail);
  for (const s of data.socialMedia) paths.push(s.img);
  return paths.filter(Boolean);
};

test("every asset referenced in data/index.ts exists in public/", () => {
  const missing = collectAssets().filter((p) => !publicFile(p.replace(/^\//, "")));
  assert.deepEqual(missing, []);
});

test("ids are unique within each collection", () => {
  for (const name of ["gridItems", "projects", "companies", "workExperience", "socialMedia"]) {
    const ids = data[name].map((x) => x.id);
    assert.equal(new Set(ids).size, ids.length, `${name} has duplicate ids`);
  }
});

test("external links are absolute https URLs", () => {
  const links = [...data.projects.map((p) => p.link), ...data.socialMedia.map((s) => s.link)];
  for (const l of links) assert.match(l, /^https:\/\//, l);
});

test("projects and work experience have the required fields", () => {
  for (const p of data.projects) for (const k of ["title", "des", "img", "link"]) assert.ok(p[k], `project ${p.id} missing ${k}`);
  for (const w of data.workExperience) for (const k of ["title", "desc", "thumbnail"]) assert.ok(w[k], `experience ${w.id} missing ${k}`);
  for (const t of data.testimonials) for (const k of ["quote", "name", "img"]) assert.ok(t[k], `testimonial missing ${k}`);
});

test("every nav anchor has a matching section id in the components", () => {
  const dir = join(root, "components");
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  const src = files.map((f) => readFileSync(join(dir, f), "utf8")).join("\n");
  for (const { link } of data.navItems) {
    const id = link.replace(/^#/, "");
    assert.match(src, new RegExp(`id=["']${id}["']`), `no element with id="${id}"`);
  }
});
