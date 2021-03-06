export const generalQuestion: { [key: string]: string } = {
  Q1: `สมมุติว่าน้องเป็นนักเวทย์มนต์แห่งการท่องกาลเวลา สามารถย้อนเวลากลับไปในอดีตและเดินทางไปยังโลกอนาคตได้ น้องจะใช้ความสามารถนี้ในการแก้ปัญหาด้านความเหลื่อมล้ำทางการศึกษาไทยที่เกิดขึ้นในปัจจุบันได้อย่างไร`,
}

export const tracks: {
  [key: string]: { title: string; questions: { [key: string]: string } }
} = {
  developer: {
    title: 'Developer',
    questions: {
      Q1: `ลองออกแบบระบบที่น้องๆ คิดว่าสามารถช่วยให้การเดินทางด้วยระบบขนส่งสาธารณะดียิ่งขึ้น ไม่ว่าจะเป็น แท็กซี่ รถเมล์ รถไฟฟ้า รถไฟ หรือเครื่องบิน และจะใช้เทคโนโลยีอะไรในการแก้ปัญหานี้ได้บ้าง`,
      Q2: `ลองเขียนโปรแกรมเพื่อแนะนำตัวเองสั้นๆ ในรูปแบบใดๆ ก็ได้ ไม่ว่าจะเป็นเว็บไซต์, โปรแกรม command line หรือรูปแบบอื่นๆ ตามที่ต้องการ
          (ถ้าเป็นโค้ด HTML สามารถวางในช่องด้านล่างได้เลย หรือสามารถส่งโค้ดมาผ่าน GitHub, Gist หรือแพลตฟอร์มอื่นๆ ได้ตามต้องการ)`,
    },
  },
  designer: {
    title: 'Designer',
    questions: {
      Q1: `ลองออกแบบเว็บ แอพพลิเคชั่น หรือสินค้าใดๆ ขึ้นมา เพื่อช่วยให้ขอทานสามารถรับบริจาคเงินได้มากขึ้น เช่น กล่องรับบริจาครูปแบบใหม่ เป็นต้น`,
      Q2: `จากคำถามข้อที่ 2 เล่าให้พวกเราฟังหน่อยว่าปัญหาที่น้องๆ พบคืออะไร เลือกที่จะแก้ปัญหาอย่างไร และทำไมถึงเลือกที่จะออกแบบสิ่งประดิษฐ์ดังกล่าว`,
    },
  },
}

export const religions = {
  atheist: 'ไม่นับถือศาสนา',
  buddhist: 'ศาสนาพุทธ',
  christianity: 'ศาสนาคริสต์',
  islam: 'ศาสนาอิสลาม',
  other: 'ศาสนาอื่นๆ',
}

export const grades = {
  m3: 'มัธยมศึกษาปีที่ 3',
  m4: 'มัธยมศึกษาปีที่ 4',
  m5: 'มัธยมศึกษาปีที่ 5',
  m6: 'มัธยมศึกษาปีที่ 6',
  p1: 'ปวช.',
  other: 'อื่นๆ',
}

export const genders = {
  male: 'ชาย',
  female: 'หญิง',
  other: 'เพศอื่นๆ',
  none: 'ไม่ระบุ',
}

export const bloodGroups = {
  'O+': 'O+',
  'O−': 'O-',
  'A+': 'A+',
  'A-': 'A-',
  'B+': 'B+',
  'B-': 'B-',
  'AB+': 'AB+',
  'AB-': 'AB-',
}

export const shirtSizes = {
  XS: 'XS (รอบอก 31 นิ้ว ความยาว 25 นิ้ว)',
  S: 'S (รอบอก 36 นิ้ว ความยาว 28 นิ้ว)',
  M: 'M (รอบอก 38 นิ้ว ความยาว 28.5 นิ้ว)',
  L: 'L (รอบอก 42 นิ้ว ความยาว 30 นิ้ว)',
  XL: 'XL (รอบอก 44 นิ้ว ความยาว 30.5 นิ้ว)',
  XXL: 'XXL (รอบอก 48 นิ้ว ความยาว 32 นิ้ว)',
}
