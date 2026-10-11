# z-Score (Standardization)

## Equation

$$
\mark[zscore]{z_i} = \frac{\mark[value]{x_i} - \mark[mean]{\bar{x}}}{\mark[sd]{s}}
$$

## Description

A [z-score]{.zscore} tells you how unusual an [observation]{.value} is: its distance from the [mean]{.mean}, expressed in units of [standard deviations]{.sd}. Standardized variables have mean 0 and standard deviation 1, which makes values on different scales comparable.

Read aloud: [z sub i]{.zscore} equals [x sub i]{.value} minus [x bar]{.mean}, over [s]{.sd}.

## .zscore

Standardized score $z_i$.

Pronounced: "z sub i", or "the z-score of observation i". The letter is "zee" in American English and "zed" in British English.

The subscript $i$ matches the one on $x_i$: every observation gets its own z-score, so there are $n$ of them. The score is dimensionless. $z = 2$ means "two standard deviations above the mean", whatever the original unit.

Standardization is linear, so it does not change the shape of the distribution: skewed data stay skewed. Tail probabilities from the normal table only apply if the data are approximately normal.

## .value

A single observation $x_i$.

Pronounced: "x sub i".

The $i$-th data point, in its original unit. $i$ can be any of $1, \dots, n$.

## .mean

Sample mean $\bar{x}$.

Pronounced: "x bar".

Subtracting it centers the data at zero. It has no subscript because it is the same for every observation.

## .sd

Sample standard deviation $s$.

Pronounced: "s".

Dividing by it rescales the data to unit spread and cancels the unit.
