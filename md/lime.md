# LIME (Local Surrogate Model)

## Equation

$$
\mark[expl]{\xi(x)} = \mark[argmin]{\underset{g \in G}{\arg\min}} \; \mark[loss]{L(f, g, \pi_x)} + \mark[complex]{\Omega(g)}
$$

## Description

LIME explains one prediction of a black-box model f by fitting a simple model around that single point. The [explanation]{.expl} is the [simple model, chosen from an interpretable family]{.argmin}, that best balances two goals: [mimic the black box near x]{.loss}, and [stay simple enough to read]{.complex}.

Read aloud: [xi of x]{.expl} equals [the g in G that minimizes]{.argmin} [L of f, g and pi x]{.loss} plus [omega of g]{.complex}.

## .expl

Explanation $\xi(x)$.

Pronounced: "xi of x".

A local surrogate: typically a sparse linear model whose coefficients say which features pushed this prediction up or down. Recipe: perturb $x$ many times, ask the black box to predict each perturbation, weight the samples by closeness to $x$, and fit a weighted, sparse linear model. The `lime` package implements it for tables, text, and images.

## .argmin

Best interpretable model $\arg\min_{g \in G}$.

Pronounced: "the g in G that minimizes".

$G$ is the family of interpretable models, e.g. linear models with at most 5 features or short trees.

## .loss

Fidelity loss $L(f, g, \pi_x)$.

Pronounced: "L of f, g and pi x".

How badly $g$ approximates the black box $f$, usually a weighted squared error over the perturbed samples. $\pi_x$ is a proximity kernel: samples close to $x$ get large weights.

The kernel width is the weak spot: different widths can give different, even contradictory, explanations, and explanations of nearby points can be unstable (Interpretable ML book, LIME chapter).

## .complex

Complexity penalty $\Omega(g)$.

Pronounced: "omega of g".

E.g. the number of features used. In practice the user fixes it directly, for example "use 5 features".
