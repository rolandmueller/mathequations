# Standard Deviation

## Equation

$$
\mark[sd]{s} = \sqrt{\mark[bessel]{\frac{1}{n-1}} \mark[sum]{\sum_{i=1}^{n}} \left( \mark[value]{x_i} - \mark[mean]{\bar{x}} \right)^{\mark[square]{2}}}
$$

## Description

The [standard deviation]{.sd} is the square root of the variance: [sum up]{.sum} the [squared]{.square} distances of each [observation]{.value} from the [mean]{.mean}, [average them with n − 1]{.bessel}, then take the square root to get back to the data's original unit.

Read aloud: [s]{.sd} equals the square root of [one over n minus one]{.bessel} times [the sum from i equals one to n]{.sum} of [x sub i]{.value} minus [x bar]{.mean}, [squared]{.square}.

## .sd

Sample standard deviation $s$.

Pronounced: "s", or "the standard deviation". Often abbreviated SD.

The square root $\sqrt{\;}$ over the whole expression undoes the squaring inside the variance: $s = \sqrt{s^2}$. The result is therefore measured in the data's unit rather than its square, and reads as a "typical" distance of an observation from the mean. For roughly normal data, about 68% of values lie within $\bar{x} \pm s$ and about 95% within $\bar{x} \pm 2s$.

The population SD is written $\sigma$ ("sigma"). Although $s^2$ is unbiased for $\sigma^2$, $s$ is slightly biased for $\sigma$ (Jensen's inequality).

## .bessel

Bessel's correction $\frac{1}{n-1}$.

Pronounced: "one over n minus one".

$n$ is the sample size. The correction accounts for the one degree of freedom used up by estimating $\bar{x}$ from the same data.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

The running index $i$ counts through the observations $1, 2, \dots, n$. $n$ is the sample size.

## .value

A single observation $x_i$.

Pronounced: "x sub i".

The $i$-th data point.

## .mean

Sample mean $\bar{x}$.

Pronounced: "x bar".

The center from which spread is measured. It is the same value for every $i$.

## .square

Squaring, the exponent $2$.

Pronounced: "squared".

Makes every deviation positive so they cannot cancel. The square root outside then brings the unit back.
