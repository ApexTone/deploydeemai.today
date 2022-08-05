// Credits: https://github.com/baires/shouldideploy/blob/master/helpers/reasons.js

import dayjs from 'dayjs';

function getDayOfWeek(day: number): string {
	return (
		{
			'0': 'Sunday',
			'1': 'Monday',
			'2': 'Tuesday',
			'3': 'Wednesday',
			'4': 'Thursday',
			'5': 'Friday',
			'6': 'Saturday'
		}[day] || '-'
	);
}

export const REASONS_TO_DEPLOY = [
	'กดไปสิ รออะไร',
	'คุณได้สิทธิ์นั้นเดี๋ยวนี้',
	'จัดไปเลยเพื่อน',
	'ลุย',
	'กดเลย ผมรับผิดชอบเอง 🔥',
	'ไป ไป ไป ไป!',
	'โอกาสแบบนี้ไม่ได้มีบ๊อยบ่อย',
	'ส่งฮอลคูลไป ❄️',
	'ปล่อยไปตามหัวใจ',
	'เอาเลย',
	'จัดไปแบบเบิ้มๆ',
	'โอเค',
	'ไม่มีไรหรอก แก้นิดเดียว',
	'พังก็แค่แก้ เรื่องจิ๊บๆ',
	'ไปเทสต์บน Production กันเถอะ',
	'LGTM',
	'ใส่เต็มข้อ ล่อเต็มแข้ง',
	'👍👍👍'
];

export const REASONS_TO_NOT_DEPLOY = [
	'ไม่แนะนำให้ Deploy วันนี้',
	'ไม่ล่ะ วันนี้วันศุกร์นะ',
	'Deploy วันจันทร์แทนดีไหม',
	'ไม่',
	'ม่ายยยยย',
	'ทำไมล่ะ?',
	'เทสต์ผ่านหรือยัง?',
	'¯\\_(ツ)_/¯',
	'😹',
	'มั่ย',
	'ไม่ สูดหายใจเข้าลึกๆ นับหนึ่งถึงสิบ แล้วลองใหม่',
	'ไปกินไอติมดีกว่าม้าง 🍦',
	'ต่อหน้าฉันเธอทำอย่างนั้นได้อย่างไร? 🥺'
];

export const REASONS_FOR_WEEKEND = [
	'เมาแล้ว กลับบ้านเถอะ',
	'Deploy วันจันทร์แทนดีไหม',
	'กินเบียร์ไหม?',
	'การดื่มสุราทำให้สมรรถภาพเสื่อม',
	'Deploy วันศุกร์ไปแล้วสินะ',
	'บอกแล้วว่า Deploy วันจันทร์ก็ไม่เชื่อ'
];

export function getReasons(day = dayjs().day()) {
	const dayOfWeek = getDayOfWeek(day);

	if (dayOfWeek === 'Friday') {
		return REASONS_TO_NOT_DEPLOY;
	}

	if (['Saturday', 'Sunday'].includes(dayOfWeek)) {
		return REASONS_FOR_WEEKEND;
	}
	// if (time.isFriday13th()) {
	//   return REASONS_FOR_FRIDAY_13TH
	// }

	// if (time.isFridayAfternoon()) {
	//   return REASONS_FOR_FRIDAY_AFTERNOON
	// }

	// if (time.isFriday()) {
	//   return REASONS_TO_NOT_DEPLOY
	// }
	// if (time.isThursdayAfternoon()) {
	//   return REASONS_FOR_THURSDAY_AFTERNOON
	// }
	// if (time.isAfternoon() && !time.isWeekend()) {
	//   return REASONS_FOR_AFTERNOON
	// }
	// if (time.isWeekend()) {
	//   return REASONS_FOR_WEEKEND
	// }

	return REASONS_TO_DEPLOY;
}
