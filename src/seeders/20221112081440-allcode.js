'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('allcodes', [
      { "key": "R1", "type": "ROLE", "valueEN": "Admin", "valueVI": "Quản trị viên", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "R2", "type": "ROLE", "valueEN": "Doctor", "valueVI": "Bác sĩ", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "R3", "type": "ROLE", "valueEN": "Patient", "valueVI": "Bệnh nhân", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "S1", "type": "STATUS", "valueEN": "New", "valueVI": "Lịch hẹn mới", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "S2", "type": "STATUS", "valueEN": "Confirmed", "valueVI": "Đã xác nhận", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "S3", "type": "STATUS", "valueEN": "Done", "valueVI": "Đã khám xong", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "S4", "type": "STATUS", "valueEN": "Cancel", "valueVI": "Đã hủy", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T1", "type": "TIME", "valueEN": "8:00 AM - 9:00 AM", "valueVI": "8:00 - 9:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T2", "type": "TIME", "valueEN": "9:00 AM - 10:00 AM", "valueVI": "9:00 - 10:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T3", "type": "TIME", "valueEN": "10:00 AM - 11:00 AM", "valueVI": "10:00 - 11:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T4", "type": "TIME", "valueEN": "11:00 AM - 0:00 PM", "valueVI": "11:00 - 12:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T5", "type": "TIME", "valueEN": "1:00 PM - 2:00 PM", "valueVI": "13:00 - 14:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T6", "type": "TIME", "valueEN": "2:00 PM - 3:00 PM", "valueVI": "14:00 - 15:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T7", "type": "TIME", "valueEN": "3:00 PM - 4:00 PM", "valueVI": "15:00 - 16:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "T8", "type": "TIME", "valueEN": "4:00 PM - 5:00 PM", "valueVI": "16:00 - 17:00", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "P0", "type": "POSITION", "valueEN": "None", "valueVI": "Bác sĩ", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "P1", "type": "POSITION", "valueEN": "Master", "valueVI": "Thạc sĩ", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "P2", "type": "POSITION", "valueEN": "Doctor", "valueVI": "Tiến sĩ", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "P3", "type": "POSITION", "valueEN": "Associate Professor", "valueVI": "Phó giáo sư", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "P4", "type": "POSITION", "valueEN": "Professor", "valueVI": "Giáo sư", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "M", "type": "GENDER", "valueEN": "Male", "valueVI": "Nam", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "F", "type": "GENDER", "valueEN": "Female", "valueVI": "Nữ", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" },
      { "key": "O", "type": "GENDER", "valueEN": "Other", "valueVI": "Khác", "createdAt": "0000-00-00 00:00:00", "updatedAt": "0000-00-00 00:00:00" }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('allcodes', null, {});
  }
};
