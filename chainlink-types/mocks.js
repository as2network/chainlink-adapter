"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A test helper that allows one to only partially satisfy a given type, and the function will
 * return the same value, but type casted as a full type.
 *
 * Useful for tests that require only a small slice of a given object to test conditions.
 *
 * @param val The partial value of a given type to be mocked as the full value
 */
function partialAsFull(val) {
    return val;
}
exports.partialAsFull = partialAsFull;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsYUFBYSxDQUFJLEdBQWU7SUFDOUMsT0FBTyxHQUFRLENBQUE7QUFDakIsQ0FBQztBQUZELHNDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIHRlc3QgaGVscGVyIHRoYXQgYWxsb3dzIG9uZSB0byBvbmx5IHBhcnRpYWxseSBzYXRpc2Z5IGEgZ2l2ZW4gdHlwZSwgYW5kIHRoZSBmdW5jdGlvbiB3aWxsXG4gKiByZXR1cm4gdGhlIHNhbWUgdmFsdWUsIGJ1dCB0eXBlIGNhc3RlZCBhcyBhIGZ1bGwgdHlwZS5cbiAqXG4gKiBVc2VmdWwgZm9yIHRlc3RzIHRoYXQgcmVxdWlyZSBvbmx5IGEgc21hbGwgc2xpY2Ugb2YgYSBnaXZlbiBvYmplY3QgdG8gdGVzdCBjb25kaXRpb25zLlxuICpcbiAqIEBwYXJhbSB2YWwgVGhlIHBhcnRpYWwgdmFsdWUgb2YgYSBnaXZlbiB0eXBlIHRvIGJlIG1vY2tlZCBhcyB0aGUgZnVsbCB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFydGlhbEFzRnVsbDxUPih2YWw6IFBhcnRpYWw8VD4pOiBUIHtcbiAgcmV0dXJuIHZhbCBhcyBUXG59XG4iXX0=