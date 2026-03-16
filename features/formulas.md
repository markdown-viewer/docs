# Math Formulas

Markdown Viewer converts LaTeX math formulas to **native Word equations** — not images! This means you can continue editing them in Word after export.

## Why Native Equations Matter

| Export Type | Edit in Word? | Quality | File Size |
|-------------|---------------|---------|-----------|
| **Native Equations** ✅ | Yes | Perfect | Small |
| Images ❌ | No | May blur on resize | Large |

With Markdown Viewer, formulas are fully editable in Word, just like you typed them there.

---

## Syntax

### Inline Math

Use single dollar signs for inline formulas:

```markdown
The famous equation $E = mc^2$ changed physics forever.
```

**Result:** The famous equation $E = mc^2$ changed physics forever.

### Block Math

Use double dollar signs for display-style formulas:

```markdown
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

**Result:**
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

---

## Common LaTeX Examples

### Fractions

```latex
$\frac{a}{b}$     →  a/b
$\frac{x+1}{x-1}$ →  (x+1)/(x-1)
```

### Superscripts and Subscripts

```latex
$x^2$          →  x squared
$x_i$          →  x subscript i
$x^{2n}$       →  x to the 2n
$x_{ij}$       →  x subscript ij
$x_i^2$        →  x subscript i, squared
```

### Greek Letters

```latex
$\alpha, \beta, \gamma, \delta$
$\epsilon, \theta, \lambda, \mu$
$\pi, \sigma, \omega, \phi$
$\Gamma, \Delta, \Omega, \Phi$
```

### Roots

```latex
$\sqrt{x}$        →  square root of x
$\sqrt[3]{x}$     →  cube root of x
$\sqrt[n]{x+y}$   →  nth root of (x+y)
```

### Sums and Products

```latex
$\sum_{i=1}^{n} x_i$        →  sum from i=1 to n
$\prod_{i=1}^{n} x_i$       →  product from i=1 to n
```

### Integrals

```latex
$\int_a^b f(x) dx$          →  integral from a to b
$\iint_D f(x,y) dA$         →  double integral
$\oint_C F \cdot dr$        →  line integral
```

### Limits

```latex
$\lim_{x \to \infty} f(x)$  →  limit as x approaches infinity
$\lim_{n \to 0} \frac{1}{n}$ →  limit as n approaches 0
```

---

## Real-World Examples

### Physics

**Newton's Second Law:**
```latex
$$F = ma = m\frac{dv}{dt} = m\frac{d^2x}{dt^2}$$
```

**Schrödinger Equation:**
```latex
$$i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi$$
```

### Mathematics

**Quadratic Formula:**
```latex
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
```

**Euler's Identity:**
```latex
$$e^{i\pi} + 1 = 0$$
```

**Taylor Series:**
```latex
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$
```

### Statistics

**Normal Distribution:**
```latex
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
```

**Expected Value:**
```latex
$$E[X] = \sum_{i=1}^{n} x_i \cdot P(x_i)$$
```

### Economics

**Present Value:**
```latex
$$PV = \frac{FV}{(1+r)^n}$$
```

**Black-Scholes:**
```latex
$$C = S_0 N(d_1) - Ke^{-rT}N(d_2)$$
```

---

## Matrices and Arrays

### Basic Matrix

```latex
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Determinant

```latex
$$
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$
```

### Systems of Equations

```latex
$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$
```

### Aligned Equations

```latex
$$
\begin{aligned}
(a+b)^2 &= a^2 + 2ab + b^2 \\
        &= a^2 + b^2 + 2ab
\end{aligned}
$$
```

---

## LaTeX Reference

### Common Operators

| LaTeX | Symbol | Description |
|-------|--------|-------------|
| `\times` | × | Multiplication |
| `\div` | ÷ | Division |
| `\pm` | ± | Plus/minus |
| `\leq` | ≤ | Less than or equal |
| `\geq` | ≥ | Greater than or equal |
| `\neq` | ≠ | Not equal |
| `\approx` | ≈ | Approximately |
| `\infty` | ∞ | Infinity |

### Functions

| LaTeX | Result |
|-------|--------|
| `\sin`, `\cos`, `\tan` | Trig functions |
| `\log`, `\ln` | Logarithms |
| `\exp` | Exponential |
| `\max`, `\min` | Max/Min |

### Accents

| LaTeX | Result |
|-------|--------|
| `\hat{x}` | x with hat |
| `\bar{x}` | x with bar |
| `\vec{x}` | x with vector arrow |
| `\dot{x}` | x with dot |
| `\ddot{x}` | x with double dot |

---

## Tips for Best Results

### Keep It Standard

Use standard LaTeX commands — exotic packages may not convert properly.

### Test Before Export

Preview formulas in the browser before exporting to Word.

### Complex Formulas

For very complex formulas:
1. Break into smaller parts if possible
2. Test each part separately
3. Use `aligned` for multi-line equations

---

## Compatibility

Exported equations work in:

- ✅ Microsoft Word 2016+
- ✅ Microsoft Word 2013
- ✅ WPS Office
- ✅ LibreOffice (with some limitations)

---

## Common Issues

### Formula Not Rendering?

1. Check delimiters: `$...$` for inline, `$$...$$` for block
2. Verify LaTeX syntax is correct
3. Escape special characters if needed

### Export Looks Different?

Some complex LaTeX features may render slightly differently in Word. The core mathematics will be correct.

---

## Learn More

- [LaTeX Math Reference](https://en.wikibooks.org/wiki/LaTeX/Mathematics)
- [Detexify](https://detexify.kirelabs.org/) — Draw a symbol, find the LaTeX
