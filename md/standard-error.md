# Standard Error of the Mean

## Equation

$$
\mark[se]{\mathrm{SE}_{\bar{x}}} = \frac{\mark[sd]{s}}{\mark[root]{\sqrt{n}}}
$$

## Description

The [standard error]{.se} says how precisely the sample mean estimates the population mean. It starts from the [spread of individual observations]{.sd} and shrinks with the [square root of the sample size]{.root}: quadrupling n only halves the uncertainty.

Read aloud: [the standard error of x bar]{.se} equals [s]{.sd} over [the square root of n]{.root}.

## .se

Standard error of the mean $\mathrm{SE}_{\bar{x}}$.

Pronounced: "S E of x bar" (letter by letter), or "the standard error of the mean". Sometimes written $s_{\bar{x}}$, read "s sub x bar".

The subscript $\bar{x}$ says whose uncertainty this is: the mean's, not an individual observation's. It is the standard deviation of $\bar{x}$ across hypothetical repeated samples, so it is a property of the estimator, not of the data. It is the basis for confidence intervals ($\bar{x} \pm t_{n-1} \cdot \mathrm{SE}$, where $t_{n-1}$ is read "t sub n minus one") and for $t$-tests.

It assumes independent observations. Clustering or autocorrelation makes this formula too optimistic.

## .sd

Sample standard deviation $s$.

Pronounced: "s".

The spread of individual observations. It does not shrink with $n$, because it estimates a fixed population quantity $\sigma$ ("sigma").

## .root

Square root of the sample size, $\sqrt{n}$.

Pronounced: "root n", or "the square root of n".

$n$ is the sample size: the number of independent observations averaged into $\bar{x}$. No running index $i$ appears because the formula works with summaries ($s$, $n$) instead of individual data points.

The root follows from $\mathrm{Var}(\bar{x}) = \sigma^2 / n$ for independent observations. It is the source of diminishing returns in data collection.
