# Cost-Complexity Pruning

## Equation

$$
\mark[min]{\min_{T \,\subset\, T_0}} \; \mark[fit]{\sum_{m=1}^{|T|} \sum_{i:\, x_i \in R_m} \left( y_i - \hat{y}_{R_m} \right)^2} + \mark[alpha]{\alpha} \, \mark[size]{|T|}
$$

## Description

A fully grown tree overfits. Cost-complexity pruning [searches the subtrees of the big tree]{.min} for the best trade-off between [fitting the training data]{.fit}, the RSS summed over all leaves, and [tree size]{.size}, the number of leaves, with [alpha]{.alpha} as the price per leaf. Small alpha keeps the big tree; large alpha cuts it down to a stump.

Read aloud: [minimize over subtrees T of T zero]{.min} [the sum over leaves m and observations in R m of y i minus y hat R m, squared]{.fit}, plus [alpha]{.alpha} times [the number of leaves of T]{.size}.

## .min

Minimization over subtrees $T \subset T_0$.

Pronounced: "minimize over subtrees T of T zero".

$T_0$ is the large tree grown first. Growing large and then pruning works better than stopping early, because a weak split can enable a very good one below it (ISLR 8.1.1).

## .fit

Training RSS of the subtree.

Pronounced: "the sum over leaves m and observations in R m of y i minus y hat R m, squared".

$R_m$ is the region of leaf $m$ and $\hat{y}_{R_m}$ its mean response. For classification trees, use the error rate, Gini, or entropy instead.

## .alpha

Complexity parameter $\alpha$.

Pronounced: "alpha".

Plays the same role as $\lambda$ in the lasso. As $\alpha$ increases, branches are pruned in a nested sequence, so all candidate trees can be computed at once. Choose $\alpha$ by cross-validation: `DecisionTreeClassifier(ccp_alpha=...)`, with candidates from `cost_complexity_pruning_path`.

## .size

Number of leaves $|T|$.

Pronounced: "the number of leaves of T".

The vertical bars denote the size (cardinality) of the tree, not an absolute value.
