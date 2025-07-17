function showTab(tabName) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Show relevant content
    console.log('Showing:', tabName);
}

function searchContent() {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim()) {
        alert(`Searching for: "${searchTerm}"`);
        // Implement search functionality here
    }
}

function openClass(classNumber) {
    alert(`Opening Class ${classNumber} materials and notes...`);
}

function addClass() {
    const className = prompt('Enter class name:');
    if (className) {
        alert(`Adding ${className} to your classes...`);
        // Implement add class functionality
    }
}

function addNote() {
    const noteTitle = prompt('Enter note title:');
    if (noteTitle) {
        alert(`Creating new note: "${noteTitle}"`);
        // Implement add note functionality
    }
}

// Notes database
const notesDatabase = {
    'physics-motion': {
        title: 'Physics - Motion & Force',
        subject: 'Physics',
        content: `
            <h3>Newton's Laws of Motion</h3>
            <p><strong>First Law (Law of Inertia):</strong> An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force.</p>
            
            <h3>Second Law</h3>
            <div class="formula-box">
                F = ma<br>
                Where: F = Force, m = mass, a = acceleration
            </div>
            
            <h3>Third Law</h3>
            <p>For every action, there is an equal and opposite reaction.</p>
            
            <h3>Equations of Motion</h3>
            <div class="formula-box">
                v = u + at<br>
                s = ut + ½at²<br>
                v² = u² + 2as
            </div>
            
            <h3>Key Points</h3>
            <ul>
                <li>Motion is relative - depends on the reference frame</li>
                <li>Force is a vector quantity (has magnitude and direction)</li>
                <li>Acceleration is directly proportional to force and inversely proportional to mass</li>
                <li><span class="highlight">Remember: Force causes acceleration, not velocity</span></li>
            </ul>
            
            <h3>Real-life Applications</h3>
            <p>• Seat belts in cars (First Law)<br>
            • Rocket propulsion (Third Law)<br>
            • Sports activities (Second Law)</p>
        `
    },
    'chemistry-acids': {
        title: 'Chemistry - Acids & Bases',
        subject: 'Chemistry',
        content: `
            <h3>What are Acids?</h3>
            <p>Acids are substances that release hydrogen ions (H⁺) when dissolved in water. They have a <span class="highlight">pH less than 7</span>.</p>
            
            <h3>Properties of Acids</h3>
            <ul>
                <li>Sour taste (never taste acids in lab!)</li>
                <li>Turn blue litmus paper red</li>
                <li>React with metals to produce hydrogen gas</li>
                <li>Conduct electricity in aqueous solution</li>
            </ul>
            
            <h3>What are Bases?</h3>
            <p>Bases are substances that release hydroxide ions (OH⁻) when dissolved in water. They have a <span class="highlight">pH greater than 7</span>.</p>
            
            <h3>pH Scale</h3>
            <div class="formula-box">
                pH = -log[H⁺]<br>
                pH + pOH = 14 (at 25°C)
            </div>
            
            <h3>Neutralization Reaction</h3>
            <div class="formula-box">
                Acid + Base → Salt + Water<br>
                HCl + NaOH → NaCl + H₂O
            </div>
            
            <h3>Common Examples</h3>
            <p><strong>Acids:</strong> HCl (Hydrochloric acid), H₂SO₄ (Sulfuric acid), HNO₃ (Nitric acid)</p>
            <p><strong>Bases:</strong> NaOH (Sodium hydroxide), KOH (Potassium hydroxide), Ca(OH)₂ (Calcium hydroxide)</p>
            
            <h3>Indicators</h3>
            <ul>
                <li><strong>Litmus:</strong> Red in acid, Blue in base</li>
                <li><strong>Phenolphthalein:</strong> Colorless in acid, Pink in base</li>
                <li><strong>Methyl Orange:</strong> Red in acid, Yellow in base</li>
            </ul>
        `
    },
    'biology-cells': {
        title: 'Biology - Cell Structure',
        subject: 'Biology',
        content: `
            <h3>Cell Theory</h3>
            <ul>
                <li>All living things are made of one or more cells</li>
                <li>Cell is the basic unit of life</li>
                <li>All cells come from pre-existing cells</li>
            </ul>
            
            <h3>Types of Cells</h3>
            <p><strong>1. Prokaryotic Cells:</strong> No membrane-bound nucleus (bacteria, archaea)</p>
            <p><strong>2. Eukaryotic Cells:</strong> Have membrane-bound nucleus (plants, animals, fungi)</p>
            
            <h3>Plant Cell Components</h3>
            <ul>
                <li><strong>Cell Wall:</strong> Provides structure and protection</li>
                <li><strong>Chloroplasts:</strong> Site of photosynthesis</li>
                <li><strong>Large Vacuole:</strong> Storage and maintains turgor pressure</li>
                <li><strong>Nucleus:</strong> Controls cell activities</li>
                <li><strong>Mitochondria:</strong> Powerhouse of the cell</li>
            </ul>
            
            <h3>Animal Cell Components</h3>
            <ul>
                <li><strong>Nucleus:</strong> Contains DNA and controls cell</li>
                <li><strong>Mitochondria:</strong> Cellular respiration</li>
                <li><strong>Ribosomes:</strong> Protein synthesis</li>
                <li><strong>Endoplasmic Reticulum:</strong> Transport system</li>
                <li><strong>Golgi Apparatus:</strong> Packaging and shipping</li>
            </ul>
            
            <h3>Key Differences</h3>
            <div class="formula-box">
                Plant Cell = Animal Cell + Cell Wall + Chloroplasts + Large Vacuole
            </div>
            
            <h3>Functions</h3>
            <p><span class="highlight">Photosynthesis:</span> 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</p>
            <p><span class="highlight">Cellular Respiration:</span> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</p>
        `
    },
    'math-algebra': {
        title: 'Math - Algebraic Expressions',
        subject: 'Mathematics',
        content: `
            <h3>What is Algebra?</h3>
            <p>Algebra is the branch of mathematics that uses letters and symbols to represent numbers and quantities in formulas and equations.</p>
            
            <h3>Basic Terms</h3>
            <ul>
                <li><strong>Variable:</strong> A letter representing an unknown number (x, y, z)</li>
                <li><strong>Constant:</strong> A fixed number (2, 5, -3)</li>
                <li><strong>Coefficient:</strong> Number multiplied by a variable (3 in 3x)</li>
                <li><strong>Term:</strong> A single part of an expression (3x, -2y, 5)</li>
            </ul>
            
            <h3>Linear Equations</h3>
            <p>An equation where the highest power of the variable is 1.</p>
            <div class="formula-box">
                Standard Form: ax + b = 0<br>
                Solution: x = -b/a
            </div>
            
            <h3>Quadratic Equations</h3>
            <p>An equation where the highest power of the variable is 2.</p>
            <div class="formula-box">
                Standard Form: ax² + bx + c = 0<br>
                Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a
            </div>
            
            <h3>Algebraic Identities</h3>
            <div class="formula-box">
                (a + b)² = a² + 2ab + b²<br>
                (a - b)² = a² - 2ab + b²<br>
                (a + b)(a - b) = a² - b²<br>
                (a + b)³ = a³ + 3a²b + 3ab² + b³
            </div>
            
            <h3>Factorization</h3>
            <p>Breaking down expressions into simpler parts:</p>
            <ul>
                <li><strong>Common Factor:</strong> 6x + 9 = 3(2x + 3)</li>
                <li><strong>Difference of Squares:</strong> x² - 4 = (x + 2)(x - 2)</li>
                <li><strong>Perfect Square:</strong> x² + 6x + 9 = (x + 3)²</li>
            </ul>
            
            <h3>Solving Steps</h3>
            <ol>
                <li>Simplify both sides</li>
                <li>Collect like terms</li>
                <li>Isolate the variable</li>
                <li>Check your answer</li>
            </ol>
        `
    },
    'english-grammar': {
        title: 'English - Grammar Rules',
        subject: 'English',
        content: `
            <h3>Parts of Speech</h3>
            <ul>
                <li><strong>Noun:</strong> Person, place, thing, or idea (book, happiness, Mumbai)</li>
                <li><strong>Pronoun:</strong> Replaces a noun (he, she, it, they)</li>
                <li><strong>Verb:</strong> Action or state of being (run, is, think)</li>
                <li><strong>Adjective:</strong> Describes a noun (beautiful, large, red)</li>
                <li><strong>Adverb:</strong> Describes a verb, adjective, or adverb (quickly, very, well)</li>
            </ul>
            
            <h3>Tenses</h3>
            <div class="formula-box">
                Present: I write<br>
                Past: I wrote<br>
                Future: I will write<br>
                Perfect: I have written
            </div>
            
            <h3>Active vs Passive Voice</h3>
            <p><strong>Active:</strong> Subject performs the action</p>
            <p>Example: "The cat chased the mouse"</p>
            <p><strong>Passive:</strong> Subject receives the action</p>
            <p>Example: "The mouse was chased by the cat"</p>
            
            <h3>Sentence Structure</h3>
            <ul>
                <li><strong>Simple:</strong> One independent clause</li>
                <li><strong>Compound:</strong> Two or more independent clauses</li>
                <li><strong>Complex:</strong> One independent + one dependent clause</li>
            </ul>
            
            <h3>Common Errors</h3>
            <ul>
                <li><span class="highlight">Subject-Verb Agreement:</span> The book is (not are) on the table</li>
                <li><span class="highlight">Apostrophe:</span> It's (it is) vs Its (possession)</li>
                <li><span class="highlight">There/Their/They're:</span> Different meanings and uses</li>
            </ul>
            
            <h3>Punctuation Rules</h3>
            <ul>
                <li><strong>Period (.):</strong> End of sentence</li>
                <li><strong>Comma (,):</strong> Separates items in a list</li>
                <li><strong>Semicolon (;):</strong> Connects related independent clauses</li>
                <li><strong>Quotation marks (""):</strong> Direct speech or quotes</li>
            </ul>
        `
    },
    'social-history': {
        title: 'Social Studies - Indian History',
        subject: 'History',
        content: `
            <h3>Ancient India (3300 BCE - 550 CE)</h3>
            <ul>
                <li><strong>Indus Valley Civilization:</strong> Harappa, Mohenjo-daro (2600-1900 BCE)</li>
                <li><strong>Vedic Period:</strong> Rigveda, caste system formation</li>
                <li><strong>Mauryan Empire:</strong> Chandragupta Maurya, Ashoka the Great</li>
                <li><strong>Gupta Period:</strong> Golden Age of India</li>
            </ul>
            
            <h3>Medieval India (550 - 1526 CE)</h3>
            <ul>
                <li><strong>Delhi Sultanate:</strong> Slave Dynasty, Khilji, Tughlaq, Lodhi</li>
                <li><strong>Vijayanagara Empire:</strong> South Indian Hindu kingdom</li>
                <li><strong>Mughal Empire:</strong> Babur, Akbar, Shah Jahan, Aurangzeb</li>
            </ul>
            
            <h3>Colonial Period (1757 - 1947)</h3>
            <ul>
                <li><strong>British East India Company:</strong> Battle of Plassey (1757)</li>
                <li><strong>Revolt of 1857:</strong> First War of Independence</li>
                <li><strong>Indian National Congress:</strong> Founded in 1885</li>
                <li><strong>Freedom Struggle:</strong> Gandhi, Nehru, Bose</li>
            </ul>
            
            <h3>Important Dates</h3>
            <div class="formula-box">
                1757 - Battle of Plassey<br>
                1857 - Sepoy Mutiny<br>
                1885 - Indian National Congress<br>
                1942 - Quit India Movement<br>
                1947 - Independence
            </div>
            
            <h3>Freedom Fighters</h3>
            <ul>
                <li><strong>Mahatma Gandhi:</strong> Non-violence, Satyagraha</li>
                <li><strong>Jawaharlal Nehru:</strong> First Prime Minister</li>
                <li><strong>Subhas Chandra Bose:</strong> Indian National Army</li>
                <li><strong>Bhagat Singh:</strong> Revolutionary patriot</li>
                <li><strong>Sardar Patel:</strong> Iron Man of India</li>
            </ul>
            
            <h3>Major Movements</h3>
            <ul>
                <li><span class="highlight">Non-Cooperation Movement (1920-22):</span> Boycott of British goods</li>
                <li><span class="highlight">Salt March (1930):</span> Dandi March by Gandhi</li>
                <li><span class="highlight">Quit India Movement (1942):</span> Do or Die</li>
            </ul>
            
            <h3>Partition of India</h3>
            <p>India was divided into two nations in 1947: India and Pakistan, leading to massive population displacement and communal violence.</p>
        `
    }
};

function openNote(noteId) {
    const note = notesDatabase[noteId];
    if (note) {
        const modal = document.getElementById('noteModal');
        const content = document.getElementById('noteContent');
        
        content.innerHTML = `
            <button class="close-btn" onclick="closeNote()">&times;</button>
            <h2>${note.title}</h2>
            <span class="subject-badge">${note.subject}</span>
            <div class="note-body">
                ${note.content}
            </div>
            <div class="note-actions">
                <button class="action-btn edit-btn" onclick="editNote('${noteId}')">✏️ Edit</button>
                <button class="action-btn share-btn" onclick="shareNote('${noteId}')">📤 Share</button>
                <button class="action-btn delete-btn" onclick="deleteNote('${noteId}')">🗑️ Delete</button>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeNote() {
    const modal = document.getElementById('noteModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function editNote(noteId) {
    alert(`Opening editor for: ${notesDatabase[noteId].title}`);
}

function shareNote(noteId) {
    alert(`Sharing note: ${notesDatabase[noteId].title}`);
}

function deleteNote(noteId) {
    if (confirm(`Are you sure you want to delete: ${notesDatabase[noteId].title}?`)) {
        alert(`Note deleted: ${notesDatabase[noteId].title}`);
        closeNote();
    }
}

// Close modal when clicking outside
document.getElementById('noteModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeNote();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeNote();
    }
});

function quickNote() {
    const quickNoteContent = prompt('Quick note:');
    if (quickNoteContent) {
        alert(`Quick note saved: "${quickNoteContent}"`);
        // Implement quick note functionality
    }
}

// Search functionality
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchContent();
    }
});

// Dynamic stats update
function updateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue + (stat.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('%') ? '%' : '');
            }
        }, 30);
    });
}

// Initialize stats animation on page load
window.addEventListener('load', updateStats);