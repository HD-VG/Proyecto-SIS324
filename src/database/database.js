import { Sequelize } from 'sequelize';

// Configura Sequelize para usar la URL de conexión directamente
export const sequelize = new Sequelize('postgres://hdvg:pWPpXH4nvvuvRhaJjrN2EyAyl12s2X0K@dpg-cpq0fnlds78s73eg7dn0-a/bd_controlcolas', {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // Habilita SSL si es necesario
      rejectUnauthorized: false // Desactiva la validación de certificados, no recomendado en producción
    }
  }
});


  
// export const sequelize = new Sequelize(
//  "projectsdb",SIS324,
//  "postgres",postgres,
//  "mysecretpassword",
//  {
//    host: "localhost",
//    dialect: "sqlite",
//     pool: {
//       max: 5,
//       min: 0,
//       require: 30000,
//       idle: 10000,
//     },
//     logging: false,
//  }
// );