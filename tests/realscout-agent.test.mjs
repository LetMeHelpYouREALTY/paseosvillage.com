import assert from "node:assert/strict";
import test from "node:test";
import {
  defaultRealscoutAgentId,
  realscoutAgentEncodedId,
} from "../src/content/site.mjs";

test("office carousel uses the encoded embed id by default", () => {
  assert.equal(realscoutAgentEncodedId(""), defaultRealscoutAgentId);
  assert.equal(realscoutAgentEncodedId(undefined), defaultRealscoutAgentId);
  assert.equal(defaultRealscoutAgentId, "QWdlbnQtMjI1MDUw");
});

test("a numeric agent id is encoded the way the office widget expects", () => {
  assert.equal(realscoutAgentEncodedId("225050"), "QWdlbnQtMjI1MDUw");
  assert.equal(realscoutAgentEncodedId(" 225050 "), "QWdlbnQtMjI1MDUw");
});

test("an already encoded id is left unchanged", () => {
  assert.equal(
    realscoutAgentEncodedId("QWdlbnQtMjI1MDUw"),
    "QWdlbnQtMjI1MDUw",
  );
});

test("unsafe widget ids fall back to the office embed", () => {
  assert.equal(
    realscoutAgentEncodedId('"><script>'),
    defaultRealscoutAgentId,
  );
});
