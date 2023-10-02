import { expectTypeOf, test } from "vitest";

import { createTson } from "./createTson.js";
import { tsonBigint } from "./handlers/tsonBigint.js";
import "./types.js";

test("types", () => {
	const t = createTson({
		types: [tsonBigint],
	});

	const expected = 1n;
	{
		const stringified = t.stringify(expected);
		//    ^?
		const parsed = t.parse(stringified);
		//    ^?
		expectTypeOf(parsed).toEqualTypeOf(expected);
	}

	{
		const serialized = t.serialize(expected);
		//    ^?
		const deserialized = t.deserialize(serialized);
		//    ^?
		expectTypeOf(deserialized).toEqualTypeOf(expected);
	}
});
