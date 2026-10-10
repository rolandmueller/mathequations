# Permutation Feature Importance

## Equation

$$
\mark[imp]{i_j} = \mark[base]{s} - \mark[norm]{\frac{1}{K}} \mark[sum]{\sum_{k=1}^{K}} \mark[perm]{s_{k,j}}
$$

## Description

How much does a model rely on feature j? Shuffle that one column, which breaks its link to the target, and see how much the score drops. The [importance]{.imp} is the [score on the intact data]{.base} minus the [average]{.norm} over [K repeated shuffles]{.sum} of the [score with feature j shuffled]{.perm}.

Read aloud: [i sub j]{.imp} equals [s]{.base} minus [one over K]{.norm} times [the sum from k equals one to K]{.sum} of [s sub k j]{.perm}.

## .imp

Permutation importance of feature $j$, $i_j$.

Pronounced: "i sub j".

A global measure: one number per feature for the whole model. Works for any model, and on held-out data it measures what matters for generalization. `sklearn.inspection.permutation_importance`.

Caveat: with correlated features, shuffling one creates unrealistic combinations, and the model can fall back on the correlated partner, so both may look unimportant. Drop-column importance (retrain without the feature and compare) answers a different question and is expensive but avoids unrealistic inputs.

## .base

Reference score $s$.

Pronounced: "s".

The model's score (e.g. accuracy or $R^2$) on the unshuffled data, ideally a validation set.

## .norm

Normalization $\frac{1}{K}$.

Pronounced: "one over K".

$K$ is the number of repeated shuffles (`n_repeats`). Their spread shows how stable the importance is.

## .sum

Summation over repetitions $\sum_{k=1}^{K}$.

Pronounced: "the sum from k equals one to K".

## .perm

Score with feature $j$ permuted, $s_{k,j}$.

Pronounced: "s sub k j".

The score after the $k$-th random shuffle of column $j$. Compare with MDI (mean decrease in impurity, the default `feature_importances_` of tree models), which is computed on the training data and is biased toward features with many unique values, such as IDs or continuous noise.
