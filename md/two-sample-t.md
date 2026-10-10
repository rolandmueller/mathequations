# Two-Sample t-Test (Welch)

## Equation

$$
\mark[t]{t} = \frac{\mark[mean1]{\bar{x}_1} - \mark[mean2]{\bar{x}_2}}{\sqrt{\frac{\mark[var1]{s_1^2}}{\mark[n1]{n_1}} + \frac{\mark[var2]{s_2^2}}{\mark[n2]{n_2}}}}
$$

## Description

The [t-statistic]{.t} compares the [mean of group 1]{.mean1} with the [mean of group 2]{.mean2}. The difference is divided by its standard error, which combines each group's [variance]{.var1} over its [size]{.n1} with the other group's [variance]{.var2} over its [size]{.n2}. Noisy or small groups make the same difference less convincing.

Read aloud: [t]{.t} equals [x bar one]{.mean1} minus [x bar two]{.mean2}, over the square root of [s one squared]{.var1} over [n one]{.n1} plus [s two squared]{.var2} over [n two]{.n2}.

## .t

Welch's $t$ statistic.

Pronounced: "t".

Tests $H_0: \mu_1 = \mu_2$. Welch's version does not assume equal variances in the two groups, which makes it the safer default: `scipy.stats.ttest_ind(a, b, equal_var=False)`. Its degrees of freedom come from the Welch–Satterthwaite formula; for hand calculations ISRS (4.3) uses the conservative $df = \min(n_1 - 1, n_2 - 1)$. If the variances can be assumed equal, the pooled variance gives Student's version of the test.

A permutation test answers the same question without the normality assumption.

## .mean1

Mean of group 1, $\bar{x}_1$.

Pronounced: "x bar one".

For example, the average conversion in the treatment group.

## .mean2

Mean of group 2, $\bar{x}_2$.

Pronounced: "x bar two".

For example, the average conversion in the control group.

## .var1

Variance of group 1, $s_1^2$.

Pronounced: "s one squared".

## .n1

Size of group 1, $n_1$.

Pronounced: "n one".

## .var2

Variance of group 2, $s_2^2$.

Pronounced: "s two squared".

## .n2

Size of group 2, $n_2$.

Pronounced: "n two".

Variances add because the groups are independent: $\mathrm{Var}(\bar{x}_1 - \bar{x}_2) = \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}$. For paired data (the same people measured twice) this is wrong; use a one-sample test on the differences instead.
