# Shapley Values (SHAP)

## Equation

$$
\mark[phi]{\phi_j} = \mark[sum]{\sum_{S \subseteq F \setminus \{j\}}} \mark[weight]{\frac{|S|!\,(|F| - |S| - 1)!}{|F|!}} \Big[ \mark[with]{f(S \cup \{j\})} - \mark[without]{f(S)} \Big]
$$

## Description

Shapley values split one prediction fairly among the features, borrowing an idea from cooperative game theory. A feature's [contribution]{.phi} is the change in prediction when it joins a group of features, the [prediction with it]{.with} minus the [prediction without it]{.without}, averaged over [all possible groups]{.sum} with [weights]{.weight} that treat every joining order as equally likely.

Read aloud: [phi j]{.phi} equals [the sum over all subsets S of F without j]{.sum} of [S factorial times F minus S minus one factorial, over F factorial]{.weight}, times [f of S union j]{.with} minus [f of S]{.without}.

## .phi

Shapley value of feature $j$, $\phi_j$.

Pronounced: "phi j".

A local explanation: it explains one prediction for one observation. The values add up: $f(x) = \phi_0 + \sum_j \phi_j$, where $\phi_0$ is the average prediction. So you can say "this house is predicted €40k above average: +€55k for location, −€15k for age". The tree interpreter decomposes a tree prediction the same additive way (bias plus contributions along the path), but without the fair averaging.

The `shap` library computes these efficiently for trees (`TreeExplainer`); summary plots of many local values give a global picture.

## .sum

Sum over coalitions $\sum_{S \subseteq F \setminus \{j\}}$.

Pronounced: "the sum over all subsets S of F without j".

$F$ is the set of all features. There are $2^{|F|-1}$ subsets, which is why exact computation is expensive and approximations are used.

## .weight

Shapley weight.

Pronounced: "S factorial times F minus S minus one factorial, over F factorial". $|S|$ is "the size of S": the number of features in the coalition. $|F|$ is "the size of F": the total number of features in the model, e.g. $|F| = 4$ for a model with four inputs.

The fraction of all orderings of the features in which exactly the features in $S$ come before $j$. Of the $|F|!$ possible orderings of all features, $|S|!\,(|F| - |S| - 1)!$ have the $|S|$ features of $S$ first (in any order), then $j$, then the remaining $|F| - |S| - 1$ features (in any order). Averaging over orderings is what makes the attribution fair (symmetric, efficient, and zero for features that never matter).

## .with

Prediction with feature $j$, $f(S \cup \{j\})$.

Pronounced: "f of S union j".

The model's prediction when only the features in $S$ plus $j$ are "known". The unknown features are averaged out over background data, which is itself a modeling choice.

## .without

Prediction without feature $j$, $f(S)$.

Pronounced: "f of S".
