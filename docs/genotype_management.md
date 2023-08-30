---
hide:
  - toc
---

??? info "Did you forget to add genes to the session or you want to remove some?"
    In the main menu, click on `Edit gene list` on the right side of the interface.

      * To remove genes, tick the boxes on the right, then click `Remove selected`. You can only delete genes that have not been used for annotations.
      * To add genes, click `Add more genes from ...`.
          * You can add multiple genes separated by any spacer (space, commas, line breaks).
          * You can refer to genes by their systematic id (SPAC3G9.12), primary name (peg1) or a synonym (cls1).
          * If a gene name is also the synonym of another gene (e.g. psu1), you will be asked to provide a primary name for that gene.

## Video summary

<div class="video-sizer">
    <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/KY7ev8IEG00" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Creating genotypes

On the left side of the session page, click on `Genotype management`. This will take you to a screen where you can see all the genes you have added to the session.

### Creating single-locus genotypes

* To create a genotype with a deletion allele, click on `Deletion`.
* To create a genotype where the expression level of the wild-type allele is altered (e.g. overexpression), click on `Other Genotype` and select `wild type` as `allele type`. Then select the expression level.
* For others, click on `Other Genotype`, then:
    * First, check if the allele you want to use already exist by writing its name on the `Allele name` text box. If you find it, click on it, and the allele details will be imported from PomBase.
    * Otherwise, create a new allele:
        * Give it the name that it has in the publication. Ideally, the name should follow [our guidelines](./describing_alleles.md#allele-naming-rules).
        * Select the type of allele, and add an allele description following the displayed example. See [all description examples](./describing_alleles.md#allele-description-rules).
    * Finally, select the expression level and click `OK`.

### Creating diploid loci

* If you want to make a diploid genotype with two different alleles, they must exist as separate single-locus genotypes.
* Start from a haploid single-locus genotype that contains one of the desired alleles, and tick the box on its left.
    <div markdown style="max-width: 400px">
      ![](assets/diploid_genotype.png)
    </div>
* Then, click on `Create diploid locus`, there you can choose to create either:
    * An homozygous locus with the starting allele.
    * An heterozygous locus with the starting allele and the wild-type.
    * An heterozygous locus with the starting allele and another allele from the session (choose from the dropdown).
* Then click `OK`.

### Creating multi-locus genotypes

* Select all single-locus genotypes that you want to combine in a multi-locus genotype, by ticking the boxes on their left.
    <div markdown style="max-width: 400px">
      ![](assets/diploid_genotype.png)
    </div>
* Click the button `Combine selected genotypes`.
* You can also create diploid multi-locus genotypes by combining diploid single-locus genotypes.

!!! question "These are just the basics, more info and edge cases can be found in the [FAQs](faqs.md#genotype-management)"
