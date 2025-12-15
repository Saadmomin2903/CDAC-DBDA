# CDAC DBDA - MCQ Learning Platform

A modern, interactive MCQ learning platform with 16,000+ questions across 8 modules for CDAC DBDA students.

## 🌟 Features

- **16,000 Questions** across 8 comprehensive modules
- **AI-Validated Answers** using dual-AI verification system
- **Interactive UI** with advanced dark mode and glassmorphism effects
- **Double-Click Validation** with visual feedback and animations
- **Auto-Complete** - automatically marks questions as completed
- **Progress Tracking** with localStorage persistence
- **Bookmark System** for important questions
- **Search Functionality** across all modules
- **Module-Specific Parsers** for different file formats

## 📚 Modules

1. **Linux & Cloud Computing** - 2000 questions
2. **DBMS** - 2000 questions
3. **Python & R** - 2000 questions
4. **Big Data** - 2000 questions
5. **Advanced Analytics** - 2000 questions
6. **Machine Learning** - 2000 questions
7. **Java Programming** - 2000 questions
8. **Data Visualization** - 2000 questions

## 🚀 Live Demo

Visit: [Your Vercel URL]

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/Saadmomin2903/CDAC_DBDA.git
cd CDAC_DBDA
```

2. Serve locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server . -p 8000
```

3. Open in browser:
```
http://localhost:8000/index-v2.html
```

## 📁 Project Structure

```
.
├── index-v2.html          # Main application (v2 UI)
├── app.js                 # Core application logic
├── styles-v2.css          # Advanced UI styles
├── *.md                   # Question banks
├── vercel.json            # Vercel configuration
└── .gitignore             # Git ignore rules
```

## 🎨 Technology Stack

- **Frontend:** HTML5, CSS3 (Custom Design System), Vanilla JavaScript
- **Styling:** Glassmorphism, CSS Animations, Responsive Design
- **Data Storage:** LocalStorage for progress tracking
- **Deployment:** Vercel

## 🔧 Features in Detail

### Answer Validation
- Single-click to select answer (cyan highlight)
- Double-click to validate answer
- Green checkmark for correct (with pulse animation)
- Red X for incorrect (with shake animation, shows correct answer)
- Automatically marks question as completed

### Progress Tracking
- Real-time progress updates
- Module-level completion tracking
- Question-level completion status
- Persistent across sessions

### Search
- Search across all questions
- Real-time filtering
- Keyboard shortcuts

## 📄 License

This project is created for educational purposes for CDAC DBDA students.

---

Built with ❤️ for CDAC DBDA Students
