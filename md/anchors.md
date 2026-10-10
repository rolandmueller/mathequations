# Anchors (Scoped Rules)

## Equation

$$
\mark[prec]{\mathrm{prec}(A)} = \mark[expect]{\mathbb{E}_{\mathcal{D}_x(z \mid A)}} \big[ \mark[agree]{\mathbb{I}_{f(x) = f(z)}} \big] \ge \mark[tau]{\tau}
$$

## Description

An anchor explains a prediction with an IF-THEN rule, such as "IF age < 25 AND no prior defaults THEN approve". The rule's [precision]{.prec} is the [average over perturbed samples that satisfy the rule]{.expect} of [whether the model's prediction stays the same]{.agree}. A rule qualifies as an anchor if this is at least a [threshold tau]{.tau}, e.g. 95%: as long as the anchor holds, the other features hardly matter.

Read aloud: [the precision of A]{.prec} equals [the expected value over z drawn near x satisfying A]{.expect} of [the indicator that f of x equals f of z]{.agree}, which must be at least [tau]{.tau}.

## .prec

Precision of rule $A$.

Pronounced: "the precision of A".

Not the classification metric of the same name, though the idea is similar: how often the rule's "prediction" is right. Anchors are searched for to have high precision and, among those, high coverage (the share of data the rule applies to). Implementations: `alibi` (`AnchorTabular`), `anchor-exp`.

Compared with LIME, anchors state explicitly where the explanation applies.

## .expect

Expectation over the perturbation distribution $\mathbb{E}_{\mathcal{D}_x(z \mid A)}$.

Pronounced: "the expected value over z drawn near x satisfying A".

$z$ are perturbed versions of the instance $x$ in which the anchor's conditions stay fixed and all other features vary. Estimated by sampling.

## .agree

Agreement indicator $\mathbb{I}_{f(x) = f(z)}$.

Pronounced: "the indicator that f of x equals f of z".

1 if the black box $f$ predicts the same class for $z$ as for $x$.

## .tau

Precision threshold $\tau$.

Pronounced: "tau".

Chosen by the user, e.g. 0.95. Higher thresholds give longer, more specific rules.
