# Permutation Test of Correlation

## Equation

$$
\mark[p]{\hat{p}} = \mark[norm]{\frac{1}{B}} \mark[sum]{\sum_{b=1}^{B}} \mark[ind]{\mathbb{I}}\Big( \mark[perm]{r\big(x, \, y_{\pi_b}\big)} \ge \mark[obs]{r(x, y)} \Big)
$$

## Description

Is an observed correlation more than chance? If x and y were unrelated, any pairing of the y values with the x values would be equally plausible. So shuffle y, [compute the correlation of the shuffled pairs]{.perm}, and [count]{.ind} how often it reaches the [observed correlation]{.obs}. That share, [over B shuffles]{.sum} and [divided by B]{.norm}, is the [p-value]{.p}.

Read aloud: [p hat]{.p} equals [one over B]{.norm} times [the sum from b equals one to B]{.sum} of [the indicator]{.ind} that [r of x and y permuted by pi b]{.perm} is at least [r of x and y]{.obs}.

## .p

p-value $\hat{p}$.

Pronounced: "p hat".

The null hypothesis is that x and y are independent (no relationship of any kind). As written the test is one-sided, for a positive correlation; compare absolute values for two-sided.

## .norm

Normalization $\frac{1}{B}$.

Pronounced: "one over B".

## .sum

Summation $\sum_{b=1}^{B}$.

Pronounced: "the sum from b equals one to B".

## .ind

Indicator $\mathbb{I}(\cdot)$.

Pronounced: "the indicator that".

## .perm

Permuted correlation $r(x, y_{\pi_b})$.

Pronounced: "r of x and y permuted by pi b".

$\pi_b$ is a random shuffle of the indices; only one variable needs shuffling. In numpy: `r_perm = np.corrcoef(x, np.random.permutation(y))[0, 1]`.

## .obs

Observed correlation $r(x, y)$.

Pronounced: "r of x and y".

The Pearson correlation with the true pairing. Testing whether the regression slope is zero is equivalent, since the slope is $r \cdot s_y / s_x$.
