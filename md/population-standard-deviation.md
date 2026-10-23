# Population Standard Deviation

## Equation

$$
\mark[popsd]{\sigma} = \sqrt{\mark[norm]{\frac{1}{N}} \mark[sum]{\sum_{i=1}^{N}} \left( \mark[value]{x_i} - \mark[mu]{\mu} \right)^{\mark[square]{2}}}
$$

## Description

The [population standard deviation]{.popsd} is the square root of the population variance: [sum up]{.sum} the [squared]{.square} distances of every [value]{.value} in the population from the [population mean]{.mu}, [divide by the population size N]{.norm}, then take the square root to get back to the original unit.

Read aloud: [sigma]{.popsd} equals the square root of [one over N]{.norm} times [the sum from i equals one to N]{.sum} of [x sub i]{.value} minus [mu]{.mu}, [squared]{.square}.

## .popsd

Population standard deviation $\sigma$.

Pronounced: "sigma" (lowercase).

The typical distance of a population member from the population mean, in the data's unit. It is the $\sigma$ in the normal distribution $N(\mu, \sigma^2)$, in the 68–95–99.7 rule, and in the standard error $\sigma / \sqrt{n}$. Estimated from a sample by the sample standard deviation $s$.

Software caveat: `np.std(x)` uses $\frac{1}{N}$ (`ddof=0`) by default, pandas `x.std()` uses $\frac{1}{n-1}$ (`ddof=1`). Pass `ddof` explicitly to get the version you mean.

## .norm

Normalization $\frac{1}{N}$.

Pronounced: "one over N".

$N$ is the size of the whole population.

## .sum

Summation $\sum_{i=1}^{N}$.

Pronounced: "the sum from i equals one to N".

## .value

A single value $x_i$.

Pronounced: "x sub i".

## .mu

Population mean $\mu$.

Pronounced: "mu".

## .square

Squaring.

Pronounced: "squared".

The square root outside undoes it, bringing the unit back.
