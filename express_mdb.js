// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// // Setup middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/hello', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });

// // Define schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String
// });

// // Define model
// const User = mongoose.model('User', userSchema);

// // Create user
// app.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Get all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Get single user
// app.get('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Update user
// app.patch('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Delete user
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server is up on port 3000');
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Setup middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/hello', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
}, { timestamps: true }); // Add timestamps option

// Define model
const User = mongoose.model('hi', userSchema);

// Create user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// Get single user
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update user
app.patch('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete user
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
