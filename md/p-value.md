# p-Value

## Equation

$$
\mark[p]{p} = \mark[prob]{P}\big( \mark[stat]{|T|} \ge \mark[obs]{|t_{\text{obs}}|} \;\mark[null]{\big|\; H_0} \big)
$$

## Description

The [p-value]{.p} is the [probability]{.prob} of getting a [test statistic]{.stat} at least as extreme as the [one actually observed]{.obs}, [assuming the null hypothesis is true]{.null}. A small p-value means the data would be surprising in a world where nothing is going on.

Read aloud: [p]{.p} equals [the probability]{.prob} that [the absolute value of T]{.stat} is at least [the absolute value of t observed]{.obs}, [given H zero]{.null}.

## .p

p-value $p$.

Pronounced: "p", or "the p-value".

Decision rule: reject $H_0$ if $p < \alpha$, the significance level chosen in advance (usually 0.05). Then $\alpha$ is the Type I error rate: the probability of rejecting a true null. A Type II error is failing to reject a false null; the power of a test is 1 minus its probability.

The p-value is not the probability that $H_0$ is true, and $1 - p$ is not the probability that the alternative is true. A large p-value does not show that $H_0$ is true either; it may just mean the sample is too small.

## .prob

Probability $P(\cdot)$.

Pronounced: "the probability that".

Computed from a reference distribution: the $t$ distribution for a $t$-test, the shuffled statistics for a permutation test, the shifted-data replicates for a bootstrap test.

## .stat

Test statistic $|T|$.

Pronounced: "the absolute value of T".

A random variable: its value in a hypothetical repetition of the study under $H_0$. Examples: the t-score, a difference in means, a difference in proportions.

The absolute values make the test two-sided ($H_A: \mu \ne \mu_0$). For a one-sided alternative such as $H_A: \mu > \mu_0$, drop them and count only one tail: $P(T \ge t_{\text{obs}} \mid H_0)$. For a symmetric null distribution the two-sided p-value is twice the one-sided one. Choose the side before looking at the data.

## .obs

Observed statistic $|t_{\text{obs}}|$.

Pronounced: "the absolute value of t observed".

The value computed from the actual sample.

## .null

Conditioning on the null hypothesis $H_0$.

Pronounced: "given H zero", or "given H naught".

$H_0$ is the skeptical default claim: no difference, no effect, $\mu = \mu_0$. Everything in the p-value is computed as if it were true. The alternative $H_A$ is what we would conclude if the data make $H_0$ implausible.
