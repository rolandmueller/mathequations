# Bootstrap Percentile Confidence Interval

## Equation

$$
\mark[ci]{\mathrm{CI}_{95\%}} = \Big[ \, \mark[lower]{\hat{\theta}^{*}_{(2.5\%)}} , \; \mark[upper]{\hat{\theta}^{*}_{(97.5\%)}} \, \Big]
$$

## Description

The [bootstrap 95% confidence interval]{.ci} needs no formula for the standard error. Draw many bootstrap resamples, compute the statistic on each, and cut off the extreme 2.5% on both sides: the interval runs from the [2.5th percentile]{.lower} to the [97.5th percentile]{.upper} of the bootstrap replicates.

Read aloud: [the 95 percent confidence interval]{.ci} runs from [the 2.5th percentile of theta hat star]{.lower} to [the 97.5th percentile of theta hat star]{.upper}.

## .ci

Bootstrap percentile interval $\mathrm{CI}_{95\%}$.

Pronounced: "the ninety-five percent confidence interval".

Recipe in numpy: build replicates with `np.mean(np.random.choice(data, size=len(data)))` repeated 10000 times, then take `np.percentile(bs_reps, [2.5, 97.5])`.

Works for any statistic: mean, median, standard deviation, a rate, a regression slope. It assumes the sample represents the population and observations are independent; small samples give intervals that are too narrow.

## .lower

Lower bound $\hat{\theta}^{*}_{(2.5\%)}$.

Pronounced: "the 2.5th percentile of theta hat star".

$\hat{\theta}^{*}$ ("theta hat star") denotes the bootstrap replicates: the statistic $\hat{\theta}$ recomputed on resampled data. Their spread approximates the sampling distribution of $\hat{\theta}$; their standard deviation is the bootstrap standard error.

## .upper

Upper bound $\hat{\theta}^{*}_{(97.5\%)}$.

Pronounced: "the 97.5th percentile of theta hat star".

For a 90% interval use the 5th and 95th percentiles. For the mean, this interval is usually close to $\bar{x} \pm 1.96\,s/\sqrt{n}$; it differs when the sampling distribution is skewed, which is when it is more trustworthy than the formula.
