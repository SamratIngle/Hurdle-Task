const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let courses = [];

// Create
app.post('/courses', (req, res) => {
    const { title, description, duration } = req.body;
    const newCourse = { id: courses.length + 1, title, description, duration };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

// Read
app.get('/courses', (req, res) => {
    res.json(courses);
});

// Update
app.put('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    if (course) {
        const { title, description, duration } = req.body;
        course.title = title;
        course.description = description;
        course.duration = duration;
        res.json(course);
    } else {
        res.status(404).send('Course not found');
    }
});

// Delete
app.delete('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    courses = courses.filter(c => c.id !== id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
