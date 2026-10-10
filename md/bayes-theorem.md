# Bayes' Theorem

## Equation

$$
\mark[post]{P(H \mid E)} = \frac{\mark[like]{P(E \mid H)} \, \mark[prior]{P(H)}}{\mark[evid]{P(E)}}
$$

## Description

Bayes' theorem turns a conditional probability around. It gives the [probability of a hypothesis after seeing evidence]{.post} from the [probability of that evidence if the hypothesis were true]{.like}, the [probability of the hypothesis beforehand]{.prior}, and the [overall probability of the evidence]{.evid}. It is how to guess a hidden die from a partner's hint, and why a positive test for a rare disease often means you are still probably healthy.

Read aloud: [the probability of H given E]{.post} equals [the probability of E given H]{.like} times [the probability of H]{.prior}, over [the probability of E]{.evid}.

## .post

Posterior $P(H \mid E)$.

Pronounced: "the probability of H given E".

What to believe after the evidence. Mixing it up with $P(E \mid H)$ is the base-rate fallacy: a test that is 99% sensitive does not mean a positive result is 99% likely to be correct.

Worked example: a disease affects 1% of people; the test catches 99% of cases and falsely flags 5% of healthy people. Then $P(\text{sick} \mid +) = \frac{0.99 \cdot 0.01}{0.99 \cdot 0.01 + 0.05 \cdot 0.99} \approx 17\%$. In confusion-matrix terms this posterior is the precision.

## .like

Likelihood $P(E \mid H)$.

Pronounced: "the probability of E given H".

How well the hypothesis predicts the evidence. Dice example: if the hidden die shows a 6 (hypothesis), how likely is the hint "the total of both dice is at least 10"?

## .prior

Prior $P(H)$.

Pronounced: "the probability of H".

The base rate before the evidence, e.g. $1/6$ for any face of a fair die.

## .evid

Evidence $P(E)$.

Pronounced: "the probability of E".

Usually computed with the law of total probability, summing over all hypotheses: $P(E) = P(E \mid H)\,P(H) + P(E \mid \text{not } H)\,P(\text{not } H)$. It makes the posteriors of all hypotheses add up to 1.

With data, all these pieces are counts in a cross-table: `pd.crosstab(df.H, df.E, normalize="columns")` gives $P(H \mid E)$ directly, `normalize="index"` gives $P(E \mid H)$.
