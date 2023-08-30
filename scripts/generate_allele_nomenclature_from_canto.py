import requests
import yaml

toml_string = requests.get('https://raw.githubusercontent.com/pombase/canto/master/canto.yaml').text
# read yaml from string
canto_config = yaml.load(toml_string, Loader=yaml.FullLoader)

for allele_type in canto_config['allele_type_list']:
    if 'amino' in allele_type['name'] or 'nucleotide' in allele_type['name']:
        print(allele_type['name'], allele_type['placeholder'], sep='\t')
