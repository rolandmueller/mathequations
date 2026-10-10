# Binomial Distribution

## Equation

$$
\mark[prob]{P(K = k)} = \mark[binom]{\binom{n}{k}} \mark[success]{p^{k}} \mark[failure]{(1-p)^{n-k}}
$$

## Description

The [probability of exactly k successes]{.prob} in n independent yes/no trials. Any one particular sequence with k successes has probability [p to the k]{.success} times [the failure probability to the n − k]{.failure}, and there are [n choose k]{.binom} such sequences.

Read aloud: [the probability that K equals k]{.prob} equals [n choose k]{.binom} times [p to the k]{.success} times [one minus p to the n minus k]{.failure}.

## .prob

Probability of $k$ successes, $P(K = k)$.

Pronounced: "the probability that K equals k".

$K$ (capital) is the random number of successes; $k$ (lowercase) is a specific value. The distribution has mean $np$ and variance $np(1-p)$.

Examples: clicks among $n$ visitors (A/B tests), heads in $n$ coin flips, the number of up-steps in a random walk of $n$ steps. In scipy: `binom.pmf(k, n, p)`; to simulate: `np.random.binomial(n, p, size)`.

## .binom

Binomial coefficient $\binom{n}{k}$.

Pronounced: "n choose k".

The number of ways to pick which $k$ of the $n$ trials are the successes: $\frac{n!}{k!\,(n-k)!}$.

## .success

$p^{k}$.

Pronounced: "p to the k".

$p$ is the success probability of a single trial. Independence lets us multiply.

## .failure

$(1-p)^{n-k}$.

Pronounced: "one minus p to the n minus k".

The remaining $n - k$ trials all fail. For large $n$ the binomial is approximately normal with mean $np$ and SD $\sqrt{np(1-p)}$, the basis of the z-test for proportions.
