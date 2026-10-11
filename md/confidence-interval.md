# Confidence Interval for the Mean

## Equation

$$
\begin{aligned}
\mark[ci]{\mathrm{CI}} &= \mark[mean]{\bar{x}} \pm \mark[crit]{t^{\star}_{n-1}} \cdot \frac{\mark[sd]{s}}{\mark[root]{\sqrt{n}}} \\[8pt]
\mark[ci]{\mathrm{CI}} &\approx \mark[mean]{\bar{x}} \pm \mark[zcrit]{z^{\star}} \cdot \frac{\mark[sd]{s}}{\mark[root]{\sqrt{n}}} \qquad \text{(large } n \text{)}
\end{aligned}
$$

## Description

A [confidence interval]{.ci} puts a margin of error around the [sample mean]{.mean}. The margin is a [critical value from the t distribution]{.crit} times the standard error: the [spread of the data]{.sd} divided by the [square root of the sample size]{.root}. For large samples the t distribution is practically normal, so the [normal critical value]{.zcrit}, 1.96 for a 95% interval, can be used instead. In words: point estimate plus or minus critical value times SE.

Read aloud: [the confidence interval]{.ci} is [x bar]{.mean} plus or minus [t star with n minus one degrees of freedom]{.crit} times [s]{.sd} over [the square root of n]{.root}. For large n, it is approximately [x bar]{.mean} plus or minus [z star]{.zcrit} times [s]{.sd} over [the square root of n]{.root}.

## .ci

Confidence interval $\mathrm{CI}$.

Pronounced: "the confidence interval".

The correct reading is about the procedure: if we repeated the study many times, 95% of the intervals built this way would contain the true mean $\mu$. Any single interval either contains $\mu$ or not. It is not "a 95% probability that $\mu$ lies in this particular interval".

Conditions (ISRS 4.1): independent observations, and either $n \ge 30$ without extreme skew, or nearly normal data for smaller $n$. A simulation makes the coverage concrete: draw many samples, build an interval for each, and count how many cover $\mu$. The bootstrap percentile interval is the assumption-light alternative.

## .mean

Sample mean $\bar{x}$.

Pronounced: "x bar".

The point estimate at the center of the interval.

## .crit

Critical value $t^{\star}_{n-1}$.

Pronounced: "t star with n minus one degrees of freedom".

The quantile of the $t$ distribution that leaves 2.5% in each tail for a 95% interval: `scipy.stats.t.ppf(0.975, df=n-1)`. Degrees of freedom are $df = n - 1$. The $t$ distribution has fatter tails than the normal to account for estimating $\sigma$ by $s$, so $t^{\star}$ is larger for small samples (2.26 at $n = 10$, 2.05 at $n = 30$) and approaches the normal value $z^{\star} = 1.96$ as $n$ grows. Use it whenever $\sigma$ is estimated, which is almost always; software does.

## .zcrit

Normal critical value $z^{\star}$.

Pronounced: "z star".

The quantile of the standard normal distribution that leaves 2.5% in each tail: $z^{\star} = 1.96$ for a 95% interval (`scipy.stats.norm.ppf(0.975)`). Other levels: 1.645 for 90%, 2.576 for 99%. The rule of thumb "mean plus or minus two standard errors" rounds 1.96 up to 2.

Justified by the central limit theorem: for large $n$ the sample mean is approximately normal, and $s$ is close enough to $\sigma$ that the $t$ and normal quantiles agree (at $n = 100$, $t^{\star} = 1.98$). For small samples $z^{\star}$ gives intervals that are too narrow, covering $\mu$ less often than promised.

## .sd

Sample standard deviation $s$.

Pronounced: "s".

The spread of individual observations.

## .root

Square root of the sample size, $\sqrt{n}$.

Pronounced: "root n".

The $\sqrt{n}$ law: to halve the width of the interval you need four times as much data. $s / \sqrt{n}$ together is the standard error of the mean.
