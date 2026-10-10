# Dropout

## Equation

$$
\mark[out]{\tilde{a}_j} = \frac{\mark[mask]{m_j}}{\mark[keep]{1 - p}} \, \mark[act]{a_j}, \qquad \mark[mask]{m_j} \sim \mark[bern]{\mathrm{Bernoulli}(1 - p)}
$$

## Description

Dropout fights overfitting in neural networks by randomly switching off neurons during training. Each [activation]{.act} is multiplied by a [random mask]{.mask} that is 0 with probability p and 1 otherwise, [drawn fresh for every training step]{.bern}. Survivors are [scaled up]{.keep} so the expected [output]{.out} stays the same. No neuron can rely on any particular other neuron being present.

Read aloud: [a tilde j]{.out} equals [m j]{.mask} over [one minus p]{.keep} times [a j]{.act}, where [m j]{.mask} is [Bernoulli with success probability one minus p]{.bern}.

## .out

Activation after dropout $\tilde{a}_j$.

Pronounced: "a tilde j".

Either 0 or $a_j / (1 - p)$. Dropout only acts during training; at prediction time all neurons are used and nothing is scaled. In keras: `layers.Dropout(0.5)` after a `Dense` layer.

## .mask

Dropout mask $m_j$.

Pronounced: "m j".

## .keep

Keep probability $1 - p$.

Pronounced: "one minus p".

$p$ is the dropout rate, typically 0.2 to 0.5. Dividing by $1 - p$ ("inverted dropout") keeps $E[\tilde{a}_j] = a_j$.

## .act

Activation $a_j$.

Pronounced: "a j".

The output of neuron $j$ before dropout.

## .bern

Bernoulli distribution $\mathrm{Bernoulli}(1 - p)$.

Pronounced: "Bernoulli with success probability one minus p".

A single coin flip: 1 with probability $1 - p$, else 0. Training with dropout is like training a huge ensemble of thinned networks that share weights, similar in spirit to bagging. The other standard regularizer in keras is an L2 weight penalty, `kernel_regularizer=regularizers.l2(0.001)`, which is ridge regression's penalty applied to network weights.
