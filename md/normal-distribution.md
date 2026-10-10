# Normal Distribution

## Equation

$$
\mark[pdf]{f(x)} = \mark[norm]{\frac{1}{\sigma \sqrt{2\pi}}} \, \mark[exp]{e}^{-\frac{1}{2} \left( \frac{\mark[x]{x} - \mark[mu]{\mu}}{\mark[sigma]{\sigma}} \right)^{2}}
$$

## Description

The bell curve. Its [density]{.pdf} is highest at the [mean]{.mu} and falls off symmetrically as the [value]{.x} moves away, measured in units of the [standard deviation]{.sigma}. The [exponential]{.exp} of minus half the squared z-score gives the bell shape; the [normalizing constant]{.norm} makes the total area equal 1.

Read aloud: [f of x]{.pdf} equals [one over sigma root two pi]{.norm} times [e]{.exp} to the minus one half of [x]{.x} minus [mu]{.mu} over [sigma]{.sigma}, squared.

## .pdf

Probability density $f(x)$.

Pronounced: "f of x".

A density, not a probability: probabilities are areas under the curve, $P(a \le X \le b) = \int_a^b f(x)\,dx$. Written $X \sim N(\mu, \sigma^2)$, "X is normal with mean mu and variance sigma squared".

The 68–95–99.7 rule: about 68% of values lie within $\mu \pm \sigma$, 95% within $\mu \pm 2\sigma$, 99.7% within $\mu \pm 3\sigma$. `scipy.stats.norm(mu, sigma).pdf(x)`, `np.random.normal(mu, sigma, size)`.

## .norm

Normalizing constant $\frac{1}{\sigma\sqrt{2\pi}}$.

Pronounced: "one over sigma root two pi".

Makes the area under the curve exactly 1. A wider curve (larger $\sigma$) is correspondingly lower.

## .exp

Exponential $e$.

Pronounced: "e".

$e^{-z^2/2}$ decays extremely fast, so the normal has thin tails: values beyond $4\sigma$ are rarer than 1 in 15000. Real data (returns, incomes) are often heavier-tailed than this.

## .x

Value $x$.

Pronounced: "x".

## .mu

Mean $\mu$.

Pronounced: "mu".

The center of the bell, which is also its median and mode.

## .sigma

Standard deviation $\sigma$.

Pronounced: "sigma".

The distance from the center to the inflection points of the curve. The expression $\frac{x - \mu}{\sigma}$ is the z-score; with $\mu = 0$ and $\sigma = 1$ this is the standard normal.
