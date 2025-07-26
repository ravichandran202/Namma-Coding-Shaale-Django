// problems/python-numbers.js
window.problemContent = `
<div class="problem-info">
    <h3 id="problem-title" class="text-center">
        <i class="fas fa-calculator"></i> Python Numbers
    </h3>
    <span class="problem-difficulty intermediate">Intermediate</span>

    <div class="problem-description">
        <p class="lead">Python offers three numeric types for different mathematical needs. Understanding these is essential for numerical computing and data analysis.</p>
        
        <div class="alert alert-note">
            <i class="fas fa-lightbulb"></i> <strong>Tip:</strong> Python automatically converts between int and float as needed in expressions.
        </div>
    </div>

    <h5><i class="fas fa-layer-group"></i> Numeric Types</h5>
    <div class="problem-example">
        <table class="type-table">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>int</code></td>
                    <td>Whole numbers (positive or negative)</td>
                    <td><code>42, -7, 0b1010</code></td>
                </tr>
                <tr>
                    <td><code>float</code></td>
                    <td>Numbers with decimal points</td>
                    <td><code>3.14, -0.001, 2.5e3</code></td>
                </tr>
                <tr>
                    <td><code>complex</code></td>
                    <td>Numbers with real+imaginary parts</td>
                    <td><code>3+4j, -2j</code></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5><i class="fas fa-calculator"></i> Number Operations</h5>
    <div class="problem-example">
        <div class="qa-item mb-3">
            <p><strong>Basic Arithmetic:</strong></p>
            <pre><code>5 + 3   # 8 (Addition)
5 - 3   # 2 (Subtraction)
5 * 3   # 15 (Multiplication)
5 / 2   # 2.5 (True Division)
5 // 2  # 2 (Floor Division)
5 % 2   # 1 (Modulus)
5 ** 2  # 25 (Exponentiation)</code></pre>
        </div>

        <div class="qa-item mb-3">
            <p><strong>Type Conversion:</strong></p>
            <pre><code>int(3.7)    # 3 (truncates decimal)
float(5)   # 5.0
complex(3) # (3+0j)</code></pre>
            <p class="small-text"><i class="fas fa-exclamation-triangle"></i> Note: Converting float to int truncates (doesn't round)</p>
        </div>
    </div>

    <h5><i class="fas fa-flask"></i> Practical Example</h5>
    <div class="problem-example">
        <p><strong>Temperature Converter:</strong></p>
        <pre><code>def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

print(fahrenheit_to_celsius(32))   # 0.0
print(fahrenheit_to_celsius(212))  # 100.0</code></pre>
    </div>

    <div class="problem-quiz">
        <h5><i class="fas fa-question-circle"></i> Quick Quiz</h5>
        <div class="quiz-item">
            <p>What will <code>int(7.9)</code> return?</p>
            <ul class="quiz-options">
                <li><code>7</code></li>
                <li><code>7.9</code></li>
                <li><code>8</code></li>
            </ul>
        </div>
        <div class="quiz-item">
            <p>Which operator gives the remainder?</p>
            <ul class="quiz-options">
                <li><code>/</code></li>
                <li><code>%</code></li>
                <li><code>//</code></li>
            </ul>
        </div>
    </div>
</div>
`;

console.log('Python Numbers problem loaded');