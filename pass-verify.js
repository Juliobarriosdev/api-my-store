const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$cWOCyRdw1ncb7GDn63fte.yAnZbzOZpseJvBjY.IEEg/oOlYDClIK';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
};

verifyPassword();