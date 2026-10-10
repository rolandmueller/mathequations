# Arithmetic Mean

## Equation

$$
\mark[mean]{\bar{x}} = \mark[normalize]{\frac{1}{n}} \mark[sum]{\sum_{i=1}^{n}} \mark[value]{x_i}
$$

## Description

The [mean]{.mean} is what you get when you [add up]{.sum} all [observations]{.value} and [divide by how many there are]{.normalize}. It is the balance point of the data: deviations above and below it cancel exactly.

Read aloud: [x bar]{.mean} equals [one over n]{.normalize} times [the sum from i equals one to n]{.sum} of [x sub i]{.value}.

## .mean

Sample mean $\bar{x}$.

Pronounced: "x bar". The bar over a letter conventionally marks an average.

The single number that minimizes the sum of squared deviations $\sum (x_i - c)^2$ over all choices of $c$. Sensitive to outliers: one extreme value can move it arbitrarily far. The median is the robust alternative.

The population mean is written $\mu$ ("mu").

## .normalize

Normalization $\frac{1}{n}$.

Pronounced: "one over n".

$n$ is the sample size: the number of observations. Dividing by it turns a sum (which grows with $n$) into an average (which does not).

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n". $\Sigma$ is the capital Greek letter sigma, for "sum".

Adds up the term to its right once for each value of the index $i$.

The running index $i$ is a counter that steps through $1, 2, 3, \dots, n$. It is a placeholder (a "dummy variable"), so it has no meaning outside the sum. Writing $j$ instead would change nothing.

$i = 1$ below the sigma is the starting value. $n$ above the sigma is the stopping value, which is the sample size.

So $\sum_{i=1}^{3} x_i = x_1 + x_2 + x_3$.

## .value

A single observation $x_i$.

Pronounced: "x sub i", or just "x i".

The subscript $i$ says which observation: $x_1$ is the first, $x_2$ the second, and so on up to $x_n$, the last.
