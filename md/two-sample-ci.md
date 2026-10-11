# Confidence Interval for a Difference of Means

## Equation

$$
\mark[ci]{\mathrm{CI}} = \left( \mark[mean1]{\bar{x}_1} - \mark[mean2]{\bar{x}_2} \right) \pm \mark[crit]{t^{\star}_{df}} \cdot \mark[se]{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}
$$

## Description

The same recipe as for one mean, point estimate plus or minus t star times standard error, applied to a difference. The [interval]{.ci} is centered on the observed difference between the [mean of group 1]{.mean1} and the [mean of group 2]{.mean2}. Its half-width is a [critical value]{.crit} times the [standard error of the difference]{.se}, which adds up the uncertainty of both group means.

Read aloud: [the confidence interval]{.ci} is [x bar one]{.mean1} minus [x bar two]{.mean2}, plus or minus [t star with df degrees of freedom]{.crit} times [the square root of s one squared over n one plus s two squared over n two]{.se}.

## .ci

Confidence interval for $\mu_1 - \mu_2$.

Pronounced: "the confidence interval for mu one minus mu two".

Gives the size of the difference along with its uncertainty, which a p-value alone does not. A 95% interval that excludes 0 corresponds to rejecting $H_0: \mu_1 = \mu_2$ at $\alpha = 0.05$ in a two-sided test.

Conditions: independence within and between groups, and each group roughly normal or large enough. Paired data (the same subjects measured twice) need a one-sample interval on the differences instead.

## .mean1

Mean of group 1, $\bar{x}_1$.

Pronounced: "x bar one".

## .mean2

Mean of group 2, $\bar{x}_2$.

Pronounced: "x bar two".

## .crit

Critical value $t^{\star}_{df}$.

Pronounced: "t star with df degrees of freedom".

For a 95% interval, the 97.5th percentile of the $t$ distribution. For hand calculations ISRS uses the conservative $df = \min(n_1 - 1, n_2 - 1)$; software uses the Welch–Satterthwaite $df$, which is larger and gives a slightly narrower interval.

## .se

Standard error of the difference.

Pronounced: "the square root of s one squared over n one plus s two squared over n two".

Variances of independent estimates add, so the uncertainty of a difference is larger than that of either mean alone. It is the same SE as in the denominator of Welch's $t$ statistic.
