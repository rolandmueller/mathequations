# Information Gain

## Equation

$$
\mark[ig]{\mathrm{IG}} = \mark[parent]{H(\text{parent})} - \mark[sum]{\sum_{c \in \{L,\, R\}}} \mark[weight]{\frac{n_c}{n}} \, \mark[child]{H(c)}
$$

## Description

[Information gain]{.ig} scores a candidate split: how much does it reduce the class mix? Start from the [entropy of the node before splitting]{.parent} and subtract the entropy [of each child node]{.child}, [summed over the left and right child]{.sum} and [weighted by the share of observations that land there]{.weight}. The tree tries every predictor and cut point and takes the split with the largest gain.

Read aloud: [I G]{.ig} equals [H of the parent]{.parent} minus [the sum over the children c in L and R]{.sum} of [n c over n]{.weight} times [H of c]{.child}.

## .ig

Information gain $\mathrm{IG}$.

Pronounced: "I G", or "the information gain".

Always $\ge 0$: splitting never increases weighted entropy. Growing stops when no split gains enough (or by `max_depth`, `min_samples_leaf`), and pruning removes splits that did not pay off on new data. The same formula with Gini in place of $H$ is the "decrease in impurity" that MDI feature importance adds up per feature.

Information gain favours features with many distinct values, which can shatter the data into tiny pure nodes; the gain ratio (C4.5) divides by the entropy of the split itself to correct for this. Binary trees such as scikit-learn's CART are less affected but still biased.

## .parent

Entropy of the parent node $H(\text{parent})$.

Pronounced: "H of the parent".

The class mix before the split. It is the same for every candidate split of this node, so maximizing the gain means minimizing the weighted child entropy.

## .sum

Sum over child nodes $\sum_{c \in \{L,\, R\}}$.

Pronounced: "the sum over the children c in L and R".

$L$ and $R$ are the left and right child, e.g. "income < 50k" and "income ≥ 50k". Multiway splits just have more children.

## .weight

Child weight $\frac{n_c}{n}$.

Pronounced: "n c over n".

$n_c$ is the number of observations sent to child $c$; $n$ is the number in the parent. Weighting stops the tree from favouring a split that carves off one tiny pure node while leaving the rest as mixed as before.

## .child

Entropy of child $c$, $H(c)$.

Pronounced: "H of c".

Computed with the same entropy formula from the class shares inside the child.

Worked example: a parent with 10 positives and 10 negatives has $H = 1$ bit. A split into (8+, 2−) and (2+, 8−) gives children with $H \approx 0.72$ each, so $\mathrm{IG} \approx 1 - 0.72 = 0.28$ bits.
