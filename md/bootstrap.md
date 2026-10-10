# Bootstrap Standard Error

## Equation

$$
\mark[seboot]{\widehat{\mathrm{SE}}_{\text{boot}}} = \sqrt{\mark[norm]{\frac{1}{B-1}} \mark[sum]{\sum_{b=1}^{B}} \left( \mark[rep]{\hat{\theta}^{*b}} - \mark[avg]{\bar{\theta}^{*}} \right)^{2}}
$$

## Description

The [bootstrap standard error]{.seboot} estimates how much a statistic would vary from sample to sample, using only the one sample we have. Resample the data with replacement, recompute the [statistic on each resample]{.rep}, and measure the [spread of these replicates]{.sum} around [their average]{.avg}, [averaged with B − 1]{.norm}. It is simply the standard deviation of the bootstrap replicates.

Read aloud: [the bootstrap standard error]{.seboot} equals the square root of [one over B minus one]{.norm} times [the sum from b equals one to B]{.sum} of [theta hat star b]{.rep} minus [theta bar star]{.avg}, squared.

## .seboot

Bootstrap estimate of the standard error $\widehat{\mathrm{SE}}_{\text{boot}}$.

Pronounced: "the bootstrap S E".

Works for almost any statistic (median, IQR, correlation, a regression coefficient), including those with no textbook formula. A 95% percentile interval comes from the same replicates: take their 2.5th and 97.5th percentiles (`np.percentile(reps, [2.5, 97.5])`).

The bootstrap assumes the sample represents the population and observations are independent. It struggles with very small samples and with extremes such as the maximum.

## .norm

Normalization $\frac{1}{B-1}$.

Pronounced: "one over B minus one".

$B$ is the number of bootstrap resamples, typically 1000 to 10000. It is chosen by you, not by the data, so more is just more computing time.

## .sum

Summation $\sum_{b=1}^{B}$.

Pronounced: "the sum from b equals one to B".

The index $b$ runs over the bootstrap resamples, not over the observations.

## .rep

Bootstrap replicate $\hat{\theta}^{*b}$.

Pronounced: "theta hat star b".

The statistic $\hat{\theta}$ computed on resample $b$. Each resample draws $n$ observations from the original $n$ with replacement, so some appear twice and others not at all (on average about 37% are left out). The star marks "computed on a resample".

## .avg

Mean of the replicates $\bar{\theta}^{*}$.

Pronounced: "theta bar star".

The average of all $B$ replicates. If it differs noticeably from the original $\hat{\theta}$, the statistic is biased.
