# One-Sample t-Test

## Equation

$$
\mark[t]{t} = \frac{\mark[mean]{\bar{x}} - \mark[null]{\mu_0}}{\mark[sd]{s} / \mark[root]{\sqrt{n}}}
$$

## Description

The [t-statistic]{.t} asks how far the [sample mean]{.mean} lies from the [value claimed by the null hypothesis]{.null}, measured in standard errors: the [spread of the data]{.sd} shrunk by the [square root of the sample size]{.root}. A value near 0 is what chance alone would produce; a value beyond about ±2 is surprising if the null hypothesis were true.

Read aloud: [t]{.t} equals [x bar]{.mean} minus [mu zero]{.null}, over [s]{.sd} divided by [root n]{.root}.

## .t

Test statistic $t$.

Pronounced: "t".

Under the null hypothesis it follows a $t$ distribution with $df = n - 1$ degrees of freedom. The p-value is the probability of a $t$ at least this extreme under that distribution: `scipy.stats.ttest_1samp(x, mu0)`. ISRS calls it the T score and writes it generally as $T = \frac{\text{point estimate} - \text{null value}}{SE}$.

Conditions (ISRS 4.1): independent observations, and either $n \ge 30$ without extreme skew or outliers, or nearly normal data when $n$ is small. Without them, use a bootstrap hypothesis test.

A small p-value says the data are unlikely under $H_0$; it does not measure how large or important the effect is. Report the difference and its confidence interval too.

## .mean

Sample mean $\bar{x}$.

Pronounced: "x bar".

The estimate being tested.

## .null

Hypothesized mean $\mu_0$.

Pronounced: "mu zero", or "mu naught".

The value stated by the null hypothesis $H_0: \mu = \mu_0$, for example "the average shoe size is 42". It comes from the question, not from the data.

## .sd

Sample standard deviation $s$.

Pronounced: "s".

Estimated from the data. Using $s$ instead of the unknown $\sigma$ is why the reference distribution is $t$, not normal.

## .root

Square root of the sample size, $\sqrt{n}$.

Pronounced: "root n".

The denominator $s/\sqrt{n}$ is the standard error of the mean. Larger samples make the same difference $\bar{x} - \mu_0$ more significant.
