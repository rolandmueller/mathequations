# Sample Variance

## Equation

$$
\mark[variance]{s^2} = \mark[bessel]{\frac{1}{n-1}} \mark[sum]{\sum_{i=1}^{n}} \left( \mark[value]{x_i} - \mark[mean]{\bar{x}} \right)^{\mark[square]{2}}
$$

## Description

The [variance]{.variance} measures spread. Take each [observation]{.value}, see how far it lies from the [mean]{.mean}, [square]{.square} that distance, [add them all up]{.sum}, and [average over n − 1 rather than n]{.bessel}.

Read aloud: [s squared]{.variance} equals [one over n minus one]{.bessel} times [the sum from i equals one to n]{.sum} of [x sub i]{.value} minus [x bar]{.mean}, [squared]{.square}.

## .variance

Sample variance $s^2$.

Pronounced: "s squared".

The average squared distance from the mean. Its unit is the square of the data's unit (e.g. cm² for heights in cm), which is why the standard deviation is usually reported instead.

The population variance is written $\sigma^2$ ("sigma squared", lowercase sigma).

## .bessel

Bessel's correction $\frac{1}{n-1}$.

Pronounced: "one over n minus one".

$n$ is the sample size. The deviations are measured from $\bar{x}$, which was fitted to the same data and therefore sits closer to them than the true mean $\mu$ ("mu") does. Dividing by $n-1$ makes $s^2$ an unbiased estimator of $\sigma^2$. The quantity $n-1$ is the number of degrees of freedom left after estimating $\bar{x}$.

Dividing by $n$ instead gives the maximum-likelihood estimator under normality. It is biased, but has a lower mean squared error.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

The running index $i$ steps through $1, 2, \dots, n$, so each observation contributes one squared deviation. $n$ is the sample size.

## .value

A single observation $x_i$.

Pronounced: "x sub i".

The $i$-th data point. As $i$ runs from $1$ to $n$, this visits every observation once.

## .mean

Sample mean $\bar{x}$.

Pronounced: "x bar".

The reference point from which deviations are measured. It has no subscript because it is the same for every $i$. Without squaring, $\sum (x_i - \bar{x}) = 0$ always.

## .square

Squaring, the exponent $2$.

Pronounced: "squared".

Makes every deviation positive so they cannot cancel. It also weights large deviations disproportionately, which is why variance is outlier-sensitive.
