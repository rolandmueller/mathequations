# Population Variance

## Equation

$$
\mark[popvar]{\sigma^2} = \mark[norm]{\frac{1}{N}} \mark[sum]{\sum_{i=1}^{N}} \left( \mark[value]{x_i} - \mark[mu]{\mu} \right)^{\mark[square]{2}}
$$

## Description

The [population variance]{.popvar} measures the spread of an entire population, not a sample. Take every [value]{.value} in the population, find its distance from the [population mean]{.mu}, [square]{.square} it, [add them all up]{.sum}, and [divide by the population size N]{.norm}. No correction is needed, because the true mean is known rather than estimated.

Read aloud: [sigma squared]{.popvar} equals [one over N]{.norm} times [the sum from i equals one to N]{.sum} of [x sub i]{.value} minus [mu]{.mu}, [squared]{.square}.

## .popvar

Population variance $\sigma^2$.

Pronounced: "sigma squared" (lowercase sigma).

A fixed property of the population, usually unknown. The sample variance $s^2$, with $n - 1$ in the denominator, is its unbiased estimate from a sample. The same quantity for a random variable is $\mathrm{Var}(X) = E[(X - \mu)^2]$.

Software caveat: `np.var(x)` uses this formula ($\frac{1}{N}$, `ddof=0`) by default, while pandas `x.var()` uses the sample formula ($\frac{1}{n-1}$, `ddof=1`). Applied to the same sample, they give different numbers.

## .norm

Normalization $\frac{1}{N}$.

Pronounced: "one over N".

Capital $N$ is the size of the whole population, e.g. all students enrolled in the course. Dividing a sample by $n$ instead of $n - 1$ gives the maximum-likelihood estimate, which underestimates $\sigma^2$ on average.

## .sum

Summation $\sum_{i=1}^{N}$.

Pronounced: "the sum from i equals one to N".

Runs over every member of the population, not just a sample.

## .value

A single value $x_i$.

Pronounced: "x sub i".

## .mu

Population mean $\mu$.

Pronounced: "mu".

The true mean, $\mu = \frac{1}{N}\sum_{i=1}^{N} x_i$. Because it is known exactly rather than fitted to the data, the deviations are not artificially small, which is why no $n - 1$ correction is needed.

## .square

Squaring.

Pronounced: "squared".

Makes every deviation positive and weights large ones more heavily.
