const timeConversion = require('./timeconversion');
test('when the AM/PM time  is "12:00:00AM", return "00:00:00" in military format ', () => {
	expect(timeConversion('12:00:00AM')).toEqual('00:00:00');
});
test('when the AM/PM time  is "12:00:00PM", return "12:00:00" in military format ', () => {
	expect(timeConversion('12:00:00PM')).toEqual('12:00:00');
});
test('when the AM/PM time  is "07:00:00AM", return "07:00:00" in military format ', () => {
	expect(timeConversion('07:00:00AM')).toEqual('07:00:00');
});
test('when the AM/PM time  is "07:00:00PM", return "19:00:00" in military format ', () => {
	expect(timeConversion('07:00:00PM')).toEqual('19:00:00');
});
test('when the AM/PM time  is "07:46:00AM", return "07:46:00" in military format ', () => {
	expect(timeConversion('07:46:00AM')).toEqual('07:46:00');
});
test('when the AM/PM time  is "07:46:00PM", return "19:46:00" in military format ', () => {
	expect(timeConversion('07:46:00PM')).toEqual('19:46:00');
});
test('when the AM/PM time  is "12:01:37AM", return "00:01:37" in military format ', () => {
	expect(timeConversion('12:01:37AM')).toEqual('00:01:37');
});
test('when the AM/PM time  is "12:18:33PM", return "12:18:33" in military format ', () => {
	expect(timeConversion('12:18:33PM')).toEqual('12:18:33');
});
