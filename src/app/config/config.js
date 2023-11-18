require('dotenv').config();

const config = {
    certificates: process.env.CERTIFICATES,
    portafolios: process.env.PORTAFOLIOS,
    technologies: process.env.TECHNOLOGIES
}

module.exports = { config };
