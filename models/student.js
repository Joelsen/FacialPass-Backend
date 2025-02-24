export default (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      matric_number: { type: DataTypes.STRING, unique: true },
      email: { type: DataTypes.STRING, unique: true },
      facial_image: DataTypes.TEXT,
      password_hash: DataTypes.TEXT,
    },
    { timestamps: true }
  );

  return Student;
};
