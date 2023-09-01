
## Phenotype annotations

### How do I indicate that a mutation or deletion is viable?

Annotate a genotype including that allele to `viable vegetative cell population`. Viability can depend on conditions and other alleles present on the genotype. See [phenotypes](./phenotypes.md)

### How do I indicate that a mutation or deletion is lethal?

Annotate a genotype including that allele to `inviable vegetative cell population`. Lethality can depend on conditions and other alleles present on the genotype. See [phenotypes](./phenotypes.md)

### How do I indicate that an allele is thermosensitive?

Annotate a genotype including that allele to `inviable vegetative cell population`, including `high temperature` or `low temperature` as a condition. See [phenotypes](./phenotypes.md)

## Genotype management

### What's the difference between "Wild type product level" and "Not assayed"?

Historically, `Wild type product level` and `Not assayed` have been used interchangeably when a non-wild type allele is expressed from the endogenous locus. We recommend `Not assayed` if you have not measured expression. See [Genotype management](./genotype_management.md)

### What to do when control strains over-express the wild-type allele, or express it from a plasmid?

PomBase does not capture the difference between strains expressing an allele from a plasmid or the native locus in phenotype annotations.  Similarly, we do not have a way to capture the fact that the control of an experiments is over-expressing the wild-type allele. Therefore, if both the wild-type (control) and mutant allele are over-expressed / knocked-down, the meaning in `Expression` is ambiguous. If you think the expression level plays a role in producing the phenotype, select `Overexpression` or `Knockdown`. Otherwise, select `Not assayed`. See [Genotype management](./genotype_management.md)

### What if the wild-type copy is still present in a mutant strain?

Multi-loci phenotype can be used to indicate that the wild-type allele is still present in a strain expressing an allele of that gene. For example, a strain that bears both the wild type _cdc25_ and the mutant allele _cdc25-22_. For this purpose, you can create a wild-type allele with expression level `Wild type product level`. See [Genotype management](./genotype_management.md)

## Genetic interactions

### How do I annotate positive or negative genetic interactions?

Positive and negative interactions are only allowed by BioGrid for high-throughput studies, so they cannot be added in Canto.
* If you want to submit a high-throughput dataset of genetic interactions, you can do so in [BioGrid](https://wiki.thebiogrid.org/doku.php/contribute), and it will appear in PomBase.
* Otherwise, visit [PomBase genetic interaction documentation](https://www.pombase.org/documentation/genetic-and-physical-interactions), to find what type of genetic interaction fits your case.

### How do I annotate a rescue?

Rescues can correspond to different types of genetic interactions depending on the genotypes and phenotypes involved, visit [PomBase genetic interaction documentation](https://www.pombase.org/documentation/genetic-and-physical-interactions), to find what type of genetic interaction fits your case.

## Physical interactions

### Does the order of genes in physical interaction matters.

In most cases, it does. Visit the [physical interaction page](./physical_interaction.md)

## Other

### Can I submit high-throughput datasets?

Yes, but not through Canto. See [PomBase Data Submission](https://www.pombase.org/submit-data).
