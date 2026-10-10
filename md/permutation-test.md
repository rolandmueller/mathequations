# Permutation Test p-Value

## Equation

$$
\mark[p]{\hat{p}} = \mark[norm]{\frac{1}{B}} \mark[sum]{\sum_{b=1}^{B}} \mark[ind]{\mathbb{I}}\left( \mark[perm]{|T^{*}_{b}|} \ge \mark[obs]{|T_{\text{obs}}|} \right)
$$

## Description

If the group labels did not matter, shuffling them should not change anything. So shuffle them many times, recompute the [test statistic for each shuffle]{.perm}, and [count]{.ind} how often it is at least as extreme as the [observed statistic]{.obs}. The [p-value]{.p} is that count, [summed over all shuffles]{.sum} and [turned into a fraction]{.norm}.

Read aloud: [p hat]{.p} equals [one over B]{.norm} times [the sum from b equals one to B]{.sum} of [the indicator]{.ind} that [the absolute value of T star b]{.perm} is at least [the absolute value of T observed]{.obs}.

## .p

Estimated p-value $\hat{p}$.

Pronounced: "p hat".

The share of label shuffles that produce a difference at least as large as the real one. No distributional assumptions are needed, only exchangeability under the null hypothesis.

A common refinement is $\frac{1 + \text{count}}{1 + B}$, which never reports exactly 0 (the observed labeling is itself one valid permutation).

## .norm

Normalization $\frac{1}{B}$.

Pronounced: "one over B".

$B$ is the number of random permutations, e.g. 10000. With small groups all permutations can be enumerated exactly.

## .sum

Summation $\sum_{b=1}^{B}$.

Pronounced: "the sum from b equals one to B".

Runs over the shuffles.

## .ind

Indicator function $\mathbb{I}(\cdot)$.

Pronounced: "the indicator of".

Equals 1 if the condition inside is true and 0 otherwise, so the sum counts the extreme shuffles. In numpy: `np.mean(np.abs(perm_stats) >= abs(t_obs))`.

## .perm

Permuted statistic $|T^{*}_{b}|$.

Pronounced: "the absolute value of T star b".

The statistic (e.g. difference in means) after randomly reassigning the group labels in shuffle $b$. The absolute value gives a two-sided test.

## .obs

Observed statistic $|T_{\text{obs}}|$.

Pronounced: "the absolute value of T observed".

The statistic computed with the real labels.
