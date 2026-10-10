# Bagging and Random Forests

## Equation

$$
\mark[bag]{\hat{f}_{\text{bag}}(x)} = \mark[norm]{\frac{1}{B}} \mark[sum]{\sum_{b=1}^{B}} \mark[tree]{\hat{f}^{*b}(x)}
$$

## Description

Bagging (bootstrap aggregating) tames unstable models. Train a deep tree on each of B bootstrap resamples, then [predict]{.bag} by [averaging]{.norm} the predictions of [all the trees]{.sum}. Each [individual tree]{.tree} overfits in its own way, and averaging cancels much of that variance.

Read aloud: [f hat bag of x]{.bag} equals [one over B]{.norm} times [the sum from b equals one to B]{.sum} of [f hat star b of x]{.tree}.

## .bag

Bagged prediction $\hat{f}_{\text{bag}}(x)$.

Pronounced: "f hat bag of x".

For classification, use a majority vote or average the predicted probabilities. Each tree leaves out about a third of the observations; predicting each observation with only the trees that did not see it gives the out-of-bag (OOB) error, a free estimate of the test error (`oob_score=True`).

## .norm

Normalization $\frac{1}{B}$.

Pronounced: "one over B".

$B$ is the number of trees. More trees do not cause overfitting; past a few hundred they just stop helping.

## .sum

Summation over trees $\sum_{b=1}^{B}$.

Pronounced: "the sum from b equals one to B".

## .tree

Tree fitted to bootstrap sample $b$, $\hat{f}^{*b}(x)$.

Pronounced: "f hat star b of x".

Averaging $B$ predictions with variance $\sigma^2$ and pairwise correlation $\rho$ gives variance $\rho\,\sigma^2 + \frac{1 - \rho}{B}\,\sigma^2$. More trees shrink the second term, but only decorrelating the trees shrinks the first. A random forest does this by letting each split consider only a random subset of $m$ predictors (often $m \approx \sqrt{p}$ for classification, `max_features`), so one strong predictor cannot dominate every tree.
