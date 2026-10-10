# Pooled Variance

## Equation

$$
\mark[pooled]{s_p^2} = \frac{\mark[df1]{(n_1 - 1)} \, \mark[var1]{s_1^2} + \mark[df2]{(n_2 - 1)} \, \mark[var2]{s_2^2}}{\mark[dftot]{n_1 + n_2 - 2}}
$$

## Description

If two groups can be assumed to share the same variance, their two estimates can be combined into one better estimate. The [pooled variance]{.pooled} averages the [variance of group 1]{.var1} and the [variance of group 2]{.var2}, weighting each by its [degrees of freedom]{.df1} ([likewise for group 2]{.df2}) and dividing by the [total degrees of freedom]{.dftot}. Bigger groups count more.

Read aloud: [s p squared]{.pooled} equals [n one minus one]{.df1} times [s one squared]{.var1} plus [n two minus one]{.df2} times [s two squared]{.var2}, over [n one plus n two minus two]{.dftot}.

## .pooled

Pooled variance $s_p^2$.

Pronounced: "s p squared", or "the pooled variance".

Used by the classic Student's two-sample $t$-test (ISRS 4.3, special topic): $SE = s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}$ with $df = n_1 + n_2 - 2$. In scipy: `ttest_ind(a, b, equal_var=True)`.

Only valid if the population variances really are equal. If they are not, and especially if group sizes differ too, the test gives wrong p-values. Welch's test does not need the assumption and loses little when variances are equal, so it is the usual default.

## .df1

Degrees of freedom of group 1, $n_1 - 1$.

Pronounced: "n one minus one".

## .var1

Variance of group 1, $s_1^2$.

Pronounced: "s one squared".

## .df2

Degrees of freedom of group 2, $n_2 - 1$.

Pronounced: "n two minus one".

## .var2

Variance of group 2, $s_2^2$.

Pronounced: "s two squared".

## .dftot

Total degrees of freedom $n_1 + n_2 - 2$.

Pronounced: "n one plus n two minus two".

Two degrees of freedom are used up by estimating the two group means. Multiplying back, the numerator is the sum of squared deviations of every observation from its own group mean.
