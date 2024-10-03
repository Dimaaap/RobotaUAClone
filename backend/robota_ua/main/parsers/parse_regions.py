import requests
from bs4 import BeautifulSoup

class ParseRegions:

    def __init__(self):
        self.PARSE_REGIONS_URL = "https://uk.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%96_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8"

    def send_request(self):
        request = requests.get(self.PARSE_REGIONS_URL)
        if request.status_code == 200:
            return request.text
        else:
            raise "Failed to send request"

    def parse_request(self):
        request = self.send_request()
        regions_list = []
        soup = BeautifulSoup(request, "lxml")
        regions_table = soup.find("table", {"class": "wikitable"})
        regions_table_content = regions_table.find("tbody")
        regions_table_content_row = regions_table_content.find_all("tr")
        counter = 1
        for row in regions_table_content_row:
            if counter not in [1, 2, 4]:
                region_title = row.find("td").text.rstrip()
                regions_list.append(region_title)
            counter += 1
        return regions_list


