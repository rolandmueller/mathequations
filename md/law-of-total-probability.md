# Law of Total Probability

<!-- term-order: sum like prior evid likenot priornot -->

## Equation

$$
\begin{aligned}
\mark[evid]{P(E)} &= \mark[sum]{\sum_{k}} \mark[like]{P(E \mid H_k)} \, \mark[prior]{P(H_k)} \\[10pt]
\mark[evid]{P(E)} &= \mark[like]{P(E \mid H)} \, \mark[prior]{P(H)} + \mark[likenot]{P(E \mid \text{not } H)} \, \mark[priornot]{P(\text{not } H)}
\end{aligned}
$$

## Description

The [overall probability of an event]{.evid} is often easiest to find case by case. Split the world into cases that cannot overlap and together cover everything, find the [probability of the event within each case]{.like}, weight it by [how common that case is]{.prior}, and [add up over all cases]{.sum}. With just two cases, H and not H, the sum has two terms: the event [within the other case]{.likenot}, weighted by [that case's probability]{.priornot}.

Running example, the same as on the Bayes' theorem page: a disease affects 1% of people, a test detects 99% of sick people and wrongly flags 5% of healthy people. How many people test positive overall? 0.99 · 0.01 + 0.05 · 0.99 = 0.0594, about 6%. This total is exactly the denominator of Bayes' theorem.

Read aloud: [the probability of E]{.evid} equals [the sum over all k]{.sum} of [the probability of E given H k]{.like} times [the probability of H k]{.prior}. For two cases: [the probability of E]{.evid} equals [the probability of E given H]{.like} times [the probability of H]{.prior}, plus [the probability of E given not H]{.likenot} times [the probability of not H]{.priornot}.

## .evid

Total probability $P(E)$.

Pronounced: "the probability of E".

The probability of the event over everyone, regardless of case. In the example, the share of all people who test positive: $P(+) = 0.0594$. In counts: of 10,000 people, 99 sick and 495 healthy people test positive, 594 in total.

It is a weighted average of the probabilities within the cases, with the case probabilities as weights, so it always lies between the smallest and the largest $P(E \mid H_k)$. Here it is far closer to the 5% of the healthy group than to the 99% of the sick group, because the healthy group is 99 times larger.

## .sum

Sum over all cases $\sum_k$.

Pronounced: "the sum over all k".

The cases $H_1, H_2, \dots, H_K$ must form a partition: they are mutually exclusive (no one is in two cases) and exhaustive (everyone is in one). In the example there are two, sick and healthy; with more, for example three disease stages and healthy, the sum simply has more terms.

The same idea in pandas: the overall mean of a 0/1 column equals the group means weighted by the group shares, `(df.groupby("sick").positive.mean() * df.sick.value_counts(normalize=True)).sum()` equals `df.positive.mean()`.

## .like

Probability within case $k$, $P(E \mid H_k)$.

Pronounced: "the probability of E given H k".

In the example, the probability of a positive test for a sick person: $P(+ \mid \text{sick}) = 0.99$, the sensitivity.

## .prior

Probability of case $k$, $P(H_k)$.

Pronounced: "the probability of H k".

How common each case is; these weights add up to 1. In the example, $P(\text{sick}) = 0.01$.

## .likenot

Probability within the other case, $P(E \mid \text{not } H)$.

Pronounced: "the probability of E given not H".

In the example, the probability of a positive test for a healthy person: $P(+ \mid \text{healthy}) = 0.05$, the false positive rate (one minus the specificity).

## .priornot

Probability of the other case, $P(\text{not } H)$.

Pronounced: "the probability of not H".

Always $1 - P(H)$. In the example, $P(\text{healthy}) = 0.99$.
