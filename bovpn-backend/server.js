const express = require('express');
const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');

const userRoutes = require('./routes/userRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const serverRoutes = require('./routes/serverRoutes');
const privacyPolicyRoutes = require("./routes/privacyPolicyRoutes");
const termsRoutes = require("./routes/termsRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const adRoutes = require('./routes/adRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
// Import Passport config
require('./config/passport');

// Routes
app.use('/users', userRoutes);
app.use('/subscriptions', subscriptionRoutes);
app.use('/api', serverRoutes);
app.use('/api/ads', adRoutes);
app.use("/privacy-policy", privacyPolicyRoutes);
app.use("/terms-of-service", termsRoutes);
app.use("/feedback", feedbackRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
